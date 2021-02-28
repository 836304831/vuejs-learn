
import axios from 'axios'


// 实现方式4， axios返回的就是promise对象
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 100
  })

  // axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    // 1. 使用场景
    // 1.1 修改配置，添加headers
    // 1.2 每次网络请求时，希望页面中显示请求的图标
    // 1.3 某些网络请求(比如登录（token）)， 必须携带token等特殊的信息
    console.log('请求拦截器')
    console.log(config)

    return config
  }, err => {
    console.log('请求拦截器err')
    console.log(err)
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    console.log('响应拦截器')
    console.log(res)
    // 返回真正的结果
    return res.data
  }, err => {
    console.log('响应拦截器err')
    console.log(err)
  })

  // 3.发送网络请求
  return instance(config)
}
