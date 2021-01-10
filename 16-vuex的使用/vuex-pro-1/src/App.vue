<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button v-on:click="$store.state.counter++"> + </button>
    <button v-on:click="$store.state.counter--"> - </button>
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
  }
}
</script>

<style>
</style>
