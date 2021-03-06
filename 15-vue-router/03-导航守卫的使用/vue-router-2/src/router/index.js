import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载方式
const HelloWorld = () => import('../components/HelloWorld')
const User = () => import('../components/User')
const Home = () => import('../components/Home')
const About = () => import('../components/About')

// 路由嵌套组件
const HomeNews = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMsg')

// 用于测试路由之间的参数传递
const Profile = () => import('../components/Profile')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'helloworld'
      },
      beforEnter: (to, from, next) => {
        console.log('beforenter helloword');
        next()
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      meta: {
        title: '用户'
      },
      beforeEnter: (to, from, next) => {
        console.log('beforenter user');
        next()
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      beforeEnter: (to, from, next) => {
        console.log('beforenter home');
        next()
      },
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
      component: About,
      meta: {
        title: '关于'
      },
      beforeEnter: (to, from, next) => {
        console.log('beforenter about');
        next()
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      },
      beforeEnter: (to, from, next) => {
        console.log('beforenter profile');
        next()
      }
    }
  ],
  mode: 'history'
})

// **********  全局守卫 ******************
// 前置钩子(hook)
router.beforeEach((to, from, next) => {

  // 第一个页面title出现undefine问题
  // document.title = to.meta.title

  // 保证每个页面都正常显示title
  console.log(to.matched[0].meta.title);
  document.title = to.matched[0].meta.title
  console.log('beforeEach');

  // 必须调用next,否则不会跳转
  next()
})


// **********  全局守卫 ******************
// 后置钩子(hook)
router.afterEach((to, from) => {

  // 第一个页面title出现undefine问题
  // document.title = to.meta.title

  // 保证每个页面都正常显示title
  // document.title = to.matched[0].meta.title
  console.log('afterEach');
})

export default router
