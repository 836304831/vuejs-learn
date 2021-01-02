
<!-- vue文件可将模板，脚本和样式进一步分离 -->
<template>
  <div>
    <h2 class="title">{{msg}}</h2>
    <button v-on:click="btnClick">按钮</button>
    <h2>{{name}}</h2>

    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn'
  export default {
    name: "App",
    components: {
      Cpn
    },
    data() {
      return {
        msg: "hello webpack",
        name: 'aaa'
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>