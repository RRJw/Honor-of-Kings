import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL:'http://localhost:3000/admin/api'
})
//请求拦截配置
http.interceptors.request.use( config => {
  //判断当localStorage中不存在token时，不发送token，防止jwt验证失败报错
  if(localStorage.token){
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  //将token信息通过请求头发送到主页中去
  return config
}, error => {
  return Promise.reject(error)
})

//错误响应拦截
http.interceptors.response.use(res => {
  return res
},err => {
    if(err.response.data.message){
      Vue.prototype.$message({
        type:'error',
        message:err.response.data.message
      })
    }

    //如果后端返回状态码401则响应拦截跳转到登录页面
    if(err.response.status === 401){
      router.push('/login')
    }
    return Promise.reject(err)
})

export default http