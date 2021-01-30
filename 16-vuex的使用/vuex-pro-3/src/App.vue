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

    <!--  action的异步调用: 添加对象   -->
    <button v-on:click="updateInfo"> action异步更新{{$store.state.upValue}} </button>
    <h3> action异步更新： {{$store.state.upValue}} </h3>

    <!--  getters属性使用示例1  -->
    <h3> 传统计算powerCounter值： {{$store.state.counter * $store.state.counter}} </h3>
    <h3> powerCounter值： {{$store.getters.powerCounter}} </h3>

    <!--  getters属性使用示例2: 对象数据  -->
    <h2> 传统计算年龄超过20的信息：{{this.ageBigThan}}</h2>
    <h2> getters计算年龄超过20的信息， 数量：{{$store.getters.ageBigThanLen}}  数据： {{$store.getters.ageBigThan}}</h2>

    <h2> getter计算年龄超过指定参数的数据： {{$store.getters.ageBigThanAge(22)}}</h2>

    <!--  modules内容的使用  -->
    <h2>  --------------  APP内容：modules的使用</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button v-on:click='updateNmae'>修改名称</button>
    <h3>full-name: {{$store.getters.fullName}}</h3>
    <h3>调用当前module属性: {{$store.getters.fullName2}}</h3>
    <h3>调用根属性: {{$store.getters.fullNam3}}</h3>
    <button @click="ayscUpdateName">异步更新属性</button>


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
    }, 
    updateInfo() {
      // 调用mutation方法使用commit
      // this.$store.commit('updateInfo')

      // 回调+通知方法1： 通过回调解决更新后的通知，调用action方法使用dispatch
      // this.$store.dispatch('aUpdateInfo', {
      //   params: {
      //     desc: '我是参数'
      //   },
      //   success: () => {
      //     console.log('异步调用已完成')
      //   }
      //   })

      // 回调通知方法2： 通过promise解决
      this.$store
      .dispatch('aUpdateInfo', {desc: '我是参数'})
      .then(res => {
          console.log('异步执行完成')
          console.log(res)
      })

    },
    updateNmae() {
      // 更新state中modules下的状态信息
      this.$store.commit('updateName', 'lisi')
    },
    ayscUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }  
}
</script>

<style>
</style>