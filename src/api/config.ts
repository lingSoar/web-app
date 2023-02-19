import axios from "axios"

const service = axios.create({
  baseURL: "http://localhost:3000",
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

service.interceptors.response.use(
  response => {
    return response.data.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service