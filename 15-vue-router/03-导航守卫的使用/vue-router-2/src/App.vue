<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/helloworld">helloworld</router-link>
    <!--  url中传递参数方式, userId在js脚本中的data元素中定义  -->
    <router-link v-bind:to="'/user/'+userId">用户</router-link>

    <!--  *******************  对象传递参数方式  *********************   -->
    <!--  路由参数传递方法1: router-link参数传递  -->
    <router-link v-bind:to="{path: '/profile', query: {name: 'acedar', age: 18, height: 188}}">profile</router-link>

    <!--  路由参数传递方法1: button参数传递  -->
    <button v-on:click="userClick">用户</button>
    <button v-on:click="profileClick">查看profile</button>

    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      userId: 'acedar'
    }
  },
  methods: {
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      // 传递对象
      this.$router.push({
        path: '/profile',
        query: {
          name: 'acedar',
          age: 18,
          height: 188
        }
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
