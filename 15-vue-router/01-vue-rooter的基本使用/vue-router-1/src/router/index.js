
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from "../components/About"
import HelloWorld from "../components/HelloWorld";


// 1. 创建Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2. 创建Vuerouter对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    path: '/helloworld',
    component: HelloWorld
  },
]
const router = new VueRouter({
  // 配置路由和组件之间的对应关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3. 将router对象传入到Vue实例
export default router

// 4. 在main.js中导入
