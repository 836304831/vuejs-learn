<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>

    <!--  无法使用devtool跟踪状态  -->
<!--    <button v-on:click="$store.state.counter++"> + </button>-->
<!--    <button v-on:click="$store.state.counter&#45;&#45;"> - </button>-->

    <!--  状态管理标准用法  -->
    <button v-on:click="addition"> + </button>
    <button v-on:click="subtract"> - </button>
    <router-link to="/hellovuex"></router-link>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtract() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
</style>
