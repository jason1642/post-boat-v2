import mongoose from 'mongoose'
import User from './models/user.mjs'
import Post from './models/post.mjs'
import bcrypt from 'bcrypt'
import _ from 'lodash';
import {faker } from '@faker-js/faker'


const randomStrings = [
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
  'anon',
]


// username, email password
const createManyUsers = async (char, index) => {
  console.log('Creating many users.')
  try {
    let user = await new User({
      _id: new mongoose.Types.ObjectId(),
      username: 'anon' + index,
      password: 'pass123',
      email: char + index + '@gmail.com',
      bio: char
    })
    console.log(user)
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    console.log(user, 22)
    return user
  } catch (err) {
    console.log(err, 'THERE WAS AN ERROR')
    return err
  }
}

const createManyPosts = async () => {

}


createManyUsers('anona', 1)

// randomStrings.forEach((ele, i) => {
//   createManyUsers(ele, i)
// })
// createManyPosts()