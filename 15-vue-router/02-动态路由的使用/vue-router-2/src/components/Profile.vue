<template>
  <div>
    <h2>我是profile</h2>
    <p>我是profile内容</p>
    <p> {{$route.query}}</p>
    <h3> {{$route.query.name}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
