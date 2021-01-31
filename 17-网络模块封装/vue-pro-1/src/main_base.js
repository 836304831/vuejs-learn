import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// ************* axios的全局配置 ****************** 
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 5000

// *********** 一. axios的基本使用 **************
// 1. 默认请求
axios({
  url: '/get'
}).then(res => {
  console.log(res)
}).catch(res => {
  console.log('exception：' + res)
})

// 2. 指定method
axios({
  url: '/post',
  method: 'post',
  params: {
   'page': 1,
   'params1': 'params1' 
  }
}).then(res => {
  console.log(res)
}).catch(res => {
  console.log('exception：' + res)
})


// *********** 二.axios的并发请求 **************
// 1. axios发送并发请求
axios.all([
  axios({
    url: '/get'
  }),
  axios({
    url: '/post',
    method: 'post',
    params: {
     'page': 1,
     'params1': 'params1' 
    }
  })
]).then(results => {
  console.log('并发请求结果')
  console.log(results)
})

// -------- 多个结果展开，区别在then函数 -----------
// axios.all([
//   axios({
//     url: 'http://httpbin.org/get'
//   }),
//   axios({
//     url: 'http://httpbin.org/post',
//     method: 'post',
//     params: {
//      'page': 1,
//      'params1': 'params1' 
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log('并发请求结果-多个结果展开')
//   console.log(res1)
//   console.log(res2)
// }))

// -------- 创建对应的axios的实例 -----------
// --- 使用场景：有时使用的url或timeout设置与全局配置不一样时，可以创建实例单独配置 ----

// 通过create方法创建实例
const instance = axios.create({
  baseURL: 'http://httpbin.org',
  timeout: 10000,
})

// 使用实例进行网络请求
instance({
  url: '/get',
}).then(res => {
  console.log('通过实例进行网络请求')
  console.log(res)
}).catch(res => {
  console.log('网络请求异常')
})

instance({
  url: '/post',
  method: 'post',
  params: {
    'page': 1,
    'params1': 'params1' 
  }
}).then(res => {
  console.log('通过实例进行网络请求')
  console.log(res)
})
