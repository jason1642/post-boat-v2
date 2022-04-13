import axios from 'axios'

const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820zrty';
const api = axios.create({
  baseURL: 'http://localhost:3820'
})


// Temporary helpers - move these functions to redux
interface UserInput {
  username: string,
  password: string,
  email: string
}
export const createUser = async (input:UserInput) => { 
  await api.post('/api/user/create', input)
  // .then(res=>)
}


