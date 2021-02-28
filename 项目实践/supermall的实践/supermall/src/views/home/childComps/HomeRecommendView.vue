<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <!--  因为没有搭建后台服务器，这里先使用本地图片替代  -->
        <img src="~assets/server/imgs/home/recommend/woman-5978200__340.webp" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
