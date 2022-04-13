import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app.mjs'
import User from '../models/user.mjs';
import bcrypt from 'bcrypt'
const connect =  () => mongoose.connect(global.MongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (!err) return console.log("db connected");
  else return console.log(err);
})
let testUser1, testUser2, testUser1Token, testUser1Password
beforeAll(async () => {
    await connect()
    const res = await request(app).post('/api/user/create').send({
    username: 'testuser', 
    password: 'pass123',
    email: 'testemail@gmail.com'
  })
  const resp2 = await request(app).post('/api/user/create').send({
    username: 'anon', 
    password: 'pass123',
    email: 'anonemail@gmail.com'
  })
  const res1 = await request(app).get(`/api/user/${res.body._id}`)
  const res2 = await request(app).get(`/api/user/${resp2.body._id}`)
  testUser1Password = res.body.password
  testUser1 = res1.body
  testUser1Token = resp2.body.token
  testUser2 = res2.body

    // console.log(res.body)
    return res
  });
    
afterAll(async() => {
      // mongoose.connection.users.deleteMany({})
      console.log('Deleting many')
      await User.deleteMany({})
       return  mongoose.connection.close()
      // Closing the DB connection allows Jest to exit successfully.
    })
  
// Change toBe string to the one in jest.config.cjs
describe("tags", () => {
  test('global', (done) => {
    expect(global.TokenSecret).toBe("qweqnuwofp021noqw")
    done()
  })

    test('Find all users', async () => {
      let res;
      res = await request(app).get('/api/user/get-all');
      
      // console.log('connecting after db connected')
      
      expect(res.header['content-type']).toBe("application/json; charset=utf-8");
      expect(res.status).toBe(200);
      return res
    }, 5000);
  
  test('Create a user', async () => {
    let res
    res = await request(app).post('/api/user/create').send({
      username: 'anon22', 
      password: 'pass123',
      email: 'myemail@gmail.com'
    })
    expect(res.status).toBe(200)
    // expect(res.body).not.toHaveProperty('password')
      return res
  }, 6000)

  test('Find user by name', async () => {
    let res
    res = await request(app).get('/api/user/get-by-username/testuser')
    expect(res.body.username).toBe('testuser')
    expect(res.status).toBe(200)
    return res.body
  }, 3000)
  test('Delete a user', async () => {
    // await 
    const res = await request(app).delete(`/api/user/delete-by-username`).send('testuser')

    expect(res.status).toBe(200)

  }, 4000)

  test('Follow a user', async () => {
    // console.log(testUser2)
    const res = await request(app).post('/api/user/follow').send({ target_user_id: testUser2._id, user_id: testUser1 })
    
    // console.log(testUser1)
    expect(res.status).toBe(200)
    expect(res.body._id).toBe(testUser1._id)
    expect(res.body.following[0]).toBe(testUser2._id)
    return res.body
  })

  test('Edit a user', async () => {
    const res = await request(app).put('/api/user/edit').send({
      _id: testUser1._id,
      username: 'newusername5',
      email: 'newemail@liame.com',
      bio: 'A change to the bio',
      profile_image: 'newimage.jpg'
    })
    expect(res.status).toBe(200)
    expect(res.body.username).toBe('newusername5')
    expect(res.body.email).toBe('newemail@liame.com')
    expect(res.body.bio).toBe('A change to the bio')
    expect(res.body.profile_image).toBe('newimage.jpg')

    return res

  })

  // Add verify user middleware to this route
  // testUser1
  test('Change password', async () => {
    const res = await request(app).put('/api/user/change-password').send({
      old_password: 'pass123',
      new_password: 'newpass321',
      token: testUser1Token,
      _id: testUser1._id
    })
    const validPassword = await bcrypt.compare(testUser1Password, res.body.password);
    expect(validPassword).toBe(false)
    expect(res.status).toBe(200)
    return res

  })

  })