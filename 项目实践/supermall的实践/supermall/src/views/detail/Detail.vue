<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>

</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import {getDetail} from "@/network/detail"
  import {getDetailDataDemo} from './detailDemo'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: null,
        topImages: []
      }
    },
    created() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);
      getDetail(this.iid).then(res => {
        console.log("getDetail:" +  res)
        // 替换网络请求数据, 服务器没有搭建，暂时使用本地数据替代
        res = getDetailDataDemo()

        this.topImages = res.result.itemInfo.topImages
        console.log("topImages:")
        console.log(this.topImages)
      })
    },
    mounted() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);
    }
  }
</script>

<style scoped>

</style>
