import axios from 'axios'

export const restPath = 'http://localhost:3000/api/rest/v1/'
export const expertPath = 'http://localhost:3000/api/expert/v1/'

export const Rest = axios.create({
  baseURL: restPath
})

export const Expert = axios.create({
  baseURL: expertPath
})
