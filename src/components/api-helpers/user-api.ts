import axios from 'axios'

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820';
const api = axios.create({
  baseURL: baseUrl
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

export const getmanyUsers = async (userIdArray: Array<string>) => 
  await api.post('/api/user/find-many-users', userIdArray).then(res=>res).catch(err=>err)


export const getUserInfoById = async (user_id:string) => 
  await api.get('/api/user/' + user_id).then(res=> res).catch(err=>err)

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



export const followUser = async (user_id: string, target_user_id: string) => 
  await api.post('api/user/follow', {user_id: user_id, target_user_id: target_user_id}).then(res=>res).catch(err=>err)