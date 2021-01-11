<template>
  <div id="app">

    <router-link to="/hellovuex"></router-link>
    <hello-vuex></hello-vuex>

    <h2>counter: {{$store.state.counter}}</h2>

    <!--  无法使用devtool跟踪状态  -->
<!--    <button v-on:click="$store.state.counter++"> + </button>-->
<!--    <button v-on:click="$store.state.counter&#45;&#45;"> - </button>-->

    <!--  状态管理标准用法  -->
    <button v-on:click="addition"> + </button>
    <button v-on:click="subtract"> - </button>

    <!--  mutuation的使用   -->
    <button v-on:click="addCount(5)"> +5 </button>
    <button v-on:click="addCount(10)"> +10 </button>

    <!--  mutuation的使用: 添加对象   -->
    <button v-on:click="addStu"> addstu </button>

    <!--  getters属性使用示例1  -->
    <h3> 传统计算powerCounter值： {{$store.state.counter * $store.state.counter}} </h3>
    <h3> powerCounter值： {{$store.getters.powerCounter}} </h3>

    <!--  getters属性使用示例2: 对象数据  -->
    <h2> 传统计算年龄超过20的信息：{{this.ageBigThan}}</h2>
    <h2> getters计算年龄超过20的信息， 数量：{{$store.getters.ageBigThanLen}}  数据： {{$store.getters.ageBigThan}}</h2>

    <h2> getter计算年龄超过指定参数的数据： {{$store.getters.ageBigThanAge(22)}}</h2>


  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  computed: {
    ageBigThan() {
      return this.$store.state.students.filter(s => {
        return s.age >= 20
      })
      // 简写
      // return this.$store.state.students.filter(s => s.age >= 20)
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtract() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 方法1
      // this.$store.commit('incrementCount', count)

      // 方法2
      this.$store.commit({
        type: 'incrementCount',
        count: count})
    },
    addStu() {
      const stu = {id: 130, name: 'ccc', age: 25}
      // 提交方法1
      // this.$store.commit('addStu', stu)

      // 提交方法2
      this.$store.commit({
        type: 'addStu',
        stu: stu})
    }
  }
}
</script>

<style>
</style>
