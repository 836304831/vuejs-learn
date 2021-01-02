<template>

  <div>
    <h2> 我是cpn的标题</h2>
    <p>我是cpn组件的内容</p>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Cpm",
    data() {
      return {
        name: "cpn-cpn"
      }
    }
}
</script>

<style scoped>

</style>