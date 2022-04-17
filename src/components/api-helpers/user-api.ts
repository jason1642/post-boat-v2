import axios from 'axios'

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820zrty';
const api = axios.create({
  baseURL: 'http://localhost:3820'
})


// Temporary helpers - move these functions to redux
interface UserInput {
  username: string,
  password: string,
  email: string,
  bio: string
}
export const createUser = async (input:UserInput) => 
  await api.post('/api/user/create', input)
    .then(res => {
    // console.log(res)
      // window.location.reload();
      return res
    }).catch(err => {
    console.log(err)
    return err;
  });

export const getUserComments = async (user_id) => 
  await api.get('/api/comment/getAllByUserId/' + user_id).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })


  export const removeToken = () => {
    // Accepts type string, number, boolean
    api.defaults.headers.common.authorization = false;
  };

// Get user create to work with api helper - dont worry about userstate 
// Implement create function in redux to set user state
// Remove function here 
// 
// 
// 