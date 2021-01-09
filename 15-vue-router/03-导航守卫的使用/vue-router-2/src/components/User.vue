<template>
  <div>
    <h2>我是用户</h2>
    <p>我时用户内容</p>
    <h3>{{userId}}</h3>
    <!-- -->
    <h4>{{$route.params.userId}}</h4>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroyed');
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
