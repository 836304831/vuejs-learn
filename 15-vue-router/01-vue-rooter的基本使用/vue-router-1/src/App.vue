<template>
  <div id="app">
    <h2>我是真的首页</h2>
    <router-view></router-view>
    <h3>到底了</h3>
    <!--  1. 原味router-link  -->
<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->
<!--    <router-link to="/helloworld">hello</router-link>-->

    <!--  2.添加属性的router-link  -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link to="/helloworld" tag="button" replace>hello</router-link>

    <!--   3. 使用button+click实现实现router-link的功能 -->
    <button v-on:click="homeClick">首页</button>
    <button v-on:click="aboutClick">关于</button>
<!--    <img src="./assets/logo.png">-->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      // 相当于history.pushState
      this.$router.push('/home')
      // 相当于history.replace
      // this.$router.replace('/home')
      console.log("homeClick");
    },
    aboutClick() {
      // 相当于history.pushState
      // this.$router.push("/about")
      // 相当于history.replace
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
  .router-link-acrive {
    color: red;
  }
  .active-class {
    color: coral;
  }
</style>
