<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramsInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>

</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";

  import Scroll from "@/components/common/scroll/Scroll";
  import GoodsList from "@/components/content/goods/GoodsList";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail"
  import {getDetailDataDemo, getRecommendDataDemo} from './detailDemo'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommends: []

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

        // 4. 保存商品的详细数据
        this.detailInfo = data.detailInfo

        // 5. 获取参数的信息
        this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6. 获取评论信息
        if (data.rate.cRate != 0){
          this.commentInfo = data.rate.list[0]
        }

      })

      // 3. 请求推荐数据
      getRecommend().then(res => {
        console.log(res)

        // 替换网络请求数据, 服务器没有搭建，暂时使用本地数据替代
        res = getRecommendDataDemo()
        this.recommends = res.data.list

      })
    },
    mounted() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
    background-color: #fff;
  }

</style>
