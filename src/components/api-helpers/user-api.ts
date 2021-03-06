import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://postboat.herokuapp.com' : 'http://localhost:3880';
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
  await api.post('/api/user/find-many-users', {user_id_array: userIdArray}).then(res=>res).catch(err=>err)


export const queryUsers = async (searchString: string) => 
  await api.get(`/api/user/query-users/${searchString}`).then(r => r, e => e)
  

export const getUserInfoById = async (user_id:string) => 
  await api.get('/api/user/' + user_id).then(res=> res).catch(err=>err)


export const getBasicPublicUserInfo = async (user_id: string) => 
  await api.get(`/api/user/basic-info/${user_id}`).then(r => r, e => e.response)  



export const removeToken = async(user_id: string) => {
    // Accepts type string, number, boolean
    await api.post('/api/user/log-out', user_id).then(res=>console.log('logged out'))
    api.defaults.headers.common.authorization = false;
  };

export const removeActive = async (user_id: string) => 
  await api.post('/api/user/log-out', {user_id}).then(r=>r,e=>e)
// Get user create to work with api helper - dont worry about userstate 
// Implement create function in redux to set user state
// Remove function here 
// 
// 
// 

export const subscribeToCategory = async (user_id, category_name) => 
  await api.post('/api/category/follow-category', {user_id, category_name}).then(res=>res).catch(err=>err)

export const getCategoryById = async (id:string) => 
  await api.get(`/api/category/id/${id}`).then(res => res).catch(err => err)

export const getCategoryByName = async (name: string) => 
  await api.get(`/api/category/name/${name}`).then(res => res).catch(err => err)
  


export const getChatListUserInfo = async (user_id: string) => 
  await api.get(`/api/messages/${user_id}`)

export const getMessageHistory = async (user_id: string, recipient_id: string) => 
  await api.post(`/api/messages/history`, {user_id, recipient_id})

export const sendMessage = async (user_id: string, recipient_id: string, message: string) => 
  await api.post('/api/messages/send-private-message', {user_id, recipient_id, message}).then(res=>res,err=>err)

export const readMessages = async (user_id: string, recipient_id: string) => 
  await api.post('/api/messages/read-messages', {user_id, recipient_id}).then(r=>r,e=>e)



export const followUser = async (user_id: string, target_user_id: string) => 
  await api.post('api/user/follow', {user_id: user_id, target_user_id: target_user_id}).then(res=>res).catch(err=>err)