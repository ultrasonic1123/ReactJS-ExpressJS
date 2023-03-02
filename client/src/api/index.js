import axios from 'axios'

const URL = 'http://192.168.1.17:5000'
const headers = {
    "Content-Type": "application/json",
  };
export const getPosts = () => axios.get(`${URL}/posts`, {headers})
export const createPost = (payload) => axios.post(`${URL}/posts`, payload)
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload)