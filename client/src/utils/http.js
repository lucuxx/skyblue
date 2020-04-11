import axios from 'axios'
import Vue from 'vue'
import router from '../router'

// 判断网络请求的路径
// const env = process.env.NODE_ENV
// if (env === 'production') {
//   axios.defaults.baseURL = 'http://localhost:3000'
// }
// if (env === 'development') {
//   axios.defaults.baseURL = 'http://47.106.237.64'
// }

// 配置拦截器
// Add a request interceptor
// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     var token = localStorage.getItem('token')
//     if (token) {
//       config.headers.common['Authorization'] = 'Bearer ' + token
//     }
//     return config
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

//响应拦截器
axios.interceptors.response.use(
  function(response) {
    if (response.data.code === 400) {
      router.push({ path: '/login' })
      return false
    } else {
      return response
    }
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

const instance = {
  get: function(url, params) {
    return axios.get(url, { params })
  },
  post: function(url, params) {
    return axios.post(url, params)
  },
  delete: function(url, params) {
    return axios.delete(url, { params })
  }
}

// 导出接口
Vue.prototype.$http = instance
export default instance
