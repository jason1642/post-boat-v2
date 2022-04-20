import axios from 'axios'

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820';
const api = axios.create({
  baseURL: baseUrl
})


export const createPost = async (data) =>
  api.post('/api/posts/create', data).then(res=> res).catch(err=>err)




export const getAllPostsByUser = async (user_id:string) => 
  await api.get('/api/posts/findAllByUser/' + user_id)
    .then(res => res)
    .catch(err => err)

export const getOnePost = async (id) => 
  await api.get(`/api/posts/${id}`).then(res=>res).catch(err=>err)


// Get all posts by a given array of ids
export const getManyPostsFromCommentArray= async (commentArr: Array<any>) => 
  await api.post('/api/posts/getManyPostsByComments',
    { commentArray: commentArr }).then(res => res).catch(err => err)



// like and unlike
export const likePost = async (post_id: string, user_id: string) =>
  await api.post('/api/posts/like', {
    post_id: post_id,
    user_id: user_id
  }).then(res => {
    console.log(res)
    return res
  }).catch(err => {
      console.log(err)
    })

export const savePost = async (post_id: string, user_id: string) => 
  await api.post('/api/posts/save', {
    post_id: post_id,
    user_id: user_id
  }).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
    return false
  })
    
// data = post_id, user_id, text, author: {user_id, username, profile_image}
export const commentOnPost = async (data: any) => 
  await api.post('/api/comment/post', data).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
    return err
  })

// data = {user_id, post_id, comment_id}
export const likeComment = async (data: any) => {
  await api.post('/api/comment/like', data).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
    return err
  })
}