import axios from 'axios'
import { logout } from './auth'

const request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use(
  function(config) {
    config.headers['Accept-Language'] = localStorage.getItem('lang') || 'en'
    return config
  },
  function(error) {
    const result = error.request?.data
    alert(result?.msg || error.message)
    return Promise.reject(result || error)
  }
)

request.interceptors.response.use(
  function(response) {
    //console.log(response)
    return response.data
  },
  function(error) {
    const result = error.response?.data
    alert(result?.msg || error.message)
    if (error.response?.status === 403) {
      logout()
    }
    return Promise.reject(result || error)
  }
)

export default request
