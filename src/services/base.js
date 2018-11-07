import axios from 'axios'

export const basePath = 'http://localhost:3000/api/rest/v1/'

export const Axios = axios.create({
  baseURL: basePath
})
