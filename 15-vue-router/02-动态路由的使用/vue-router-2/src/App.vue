<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/helloworld">helloworld</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      userId: 'acedar'
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
