<template>
  <swiper class="home-swiper">
    <swiper-item class="home-swiper-item" v-for="item in banners">
      <a :href="item.link">
        <!--  因为没有搭建后台服务器，这里先使用本地图片替代  -->
        <img :src="item.image" alt="">
<!--        <img src="~assets/server/imgs/home/woman-4056684__340.webp" alt="" @load="SwiperImageLoad">-->
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from "@/components/common/swiper/Swiper";
  import SwiperItem from "@/components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      SwiperImageLoad() {
        if (!this.isLoad) {
          this.$emit("SwiperImageLoad")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .home-swiper {
    height: 200px;
    overflow: hidden;
  }
  .home-swiper-item img{
    width: 100%;
  }

</style>
