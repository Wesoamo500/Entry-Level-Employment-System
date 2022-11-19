
import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:8000'})

export const getJobs = () => API.get(`post`);

export const postJobs = (newPost) =>API.post('/post',newPost)

export const deleteJob = (id) => API.delete(`/post/${id}`)

export const sendEmail = (newMail) => API.post('/contact',newMail)

export const signUp = (formData) =>axios.post('http://localhost:8000/user/signup',formData)
export const logIn = (formData) =>axios.post('http://localhost:8000/user/login',formData)

export const searchJobs = (word)=>axios.get(`http://localhost:8000/post/?jobName=${word}`)

// export const updateProfile = (user,config) =>axios.post('http://localhost:8000/user/profile',user,config)
