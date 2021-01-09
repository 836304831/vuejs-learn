<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/msg">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log('home created');
  },
  destroyed() {
    console.log('home destroyed');
  },

  // activated 和deactivated 只有在使用了keep-alive时才生效
  activated() {
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
