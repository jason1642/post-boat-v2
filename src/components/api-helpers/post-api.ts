import axios from 'axios'

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820zrty';
const api = axios.create({
  baseURL: 'http://localhost:3820'
})

// like and unlike
export const likePost = async (post_id: string, user_id: string) =>
  await api.post('/api/post/like', {
    post_id: post_id,
    user_id: user_id
  }).then(res => {
      console.log(res)
  }).catch(err => {
      console.log(err)
    })
