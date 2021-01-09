import Vue from 'vue'
import Router from 'vue-router'
import TestCom from '@/components/TestCom'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: TestCom
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode: 'history'
})

