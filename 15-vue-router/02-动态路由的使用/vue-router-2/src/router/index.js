import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import User from "../components/User";

// 懒加载方式
const HelloWorld = () => import('../components/HelloWorld')
const User = () => import('../components/User')
const Home = () => import('../components/Home')
const About = () => import('../components/About')

// 路由嵌套组件
const HomeNews = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMsg')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews,
        },
        {
          path: 'msg',
          component: HomeMsg,
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ],
  mode: 'history'
})
