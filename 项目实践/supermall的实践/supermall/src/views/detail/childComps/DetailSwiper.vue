<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item class="detail-swiper-item" v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
        {{item}}
<!--        <img src="~assets/server/imgs/detail/beach-5064674__340.webp" alt="">-->
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "@/components/common/swiper/Swiper";
  import SwiperItem from "@/components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 200px;
    overflow: hidden;
  }
  .detail-swiper-item img{
    width: 100%;
  }
</style>
