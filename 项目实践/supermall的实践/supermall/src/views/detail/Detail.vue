<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>

</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";

  import {getDetail, Goods, Shop} from "@/network/detail"
  import {getDetailDataDemo} from './detailDemo'



  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    created() {
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);

      // 2. 根据iid请求详情请数据
      getDetail(this.iid).then(res => {
        console.log("getDetail:" +  res)

        // 1. 获取顶部的轮播图片数据
        // 替换网络请求数据, 服务器没有搭建，暂时使用本地数据替代
        res = getDetailDataDemo(this.iid)
        const data = res.result
        this.topImages = data.itemInfo.topImages
        console.log("topImages:")
        console.log(this.topImages)

        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
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
