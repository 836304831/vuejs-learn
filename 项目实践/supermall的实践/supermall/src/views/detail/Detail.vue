<template>
  <div id="detail">
    <detail-nav-bar ref="detailNav" class="detail-nav" @titleClick="titleClick" :current-index="currentIndex"></detail-nav-bar>
    <scroll class="content" ref="scroll" v-bind:probe-type="3" @scroll="detailScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramsInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar/>
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
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import Scroll from "@/components/common/scroll/Scroll";
  import GoodsList from "@/components/content/goods/GoodsList";
  import {BACK_POSITION} from "@/common/constant"
  import {backTopMixin} from "@/common/mixin";


  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail"
  import {getDetailDataDemo, getRecommendDataDemo} from './detailDemo'
  import {debounce} from "@/common/utils";

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
      DetailBottomBar,
      Scroll
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommends: [],
        itemImgListener: null,
        themeTopYs: [0, 100, 400, 600],
        getThemeTopY: null,
        currentIndex: 0

      }
    },
    created() {
      console.log("created---------");
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

      // 4. 数据加载后，调用该函数
      // 更新title对应组件的offsetTop
      this.$nextTick(() => {
        //根据最新的数据，对应的DOM已经渲染完成
        // 但是图片依然是没有加载完（目前获取到的offsetTop不包含其中的图片）
        // offsetTop值不对时，绝大多数情况下时因为图片的问题
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log('themeTopYs:' + this.themeTopYs);
      })

      // 防抖函数生成, 在图片加载后调用
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      }, 200)
    },
    activated() {
      'activated------------'
    },
    deactivated() {
      'deactivated----------'
    },
    mounted() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);

      // 与home.vue的mounted代码一样，可以使用混入方式改写
      let newRefresh = debounce(this.$refs.scroll.refresh, 100)
      this.itemImgListener = () =>{
        newRefresh()
      }
      this.$bus.$on('itemImageLoad', this.itemImgListener)

    },
    methods: {
      detailImageLoad() {
        console.log("***********IMAGElOAD");
        this.$refs.scroll.refresh()

        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () =>{
          newRefresh()
        }
        // 更新title主题的Y值,调用防抖函数
        this.getThemeTopY()
        console.log('themeTopYs:' + this.themeTopYs);
      },
      titleClick(index) {
        console.log('titleIndex:', index);
        console.log(this.themeTopYs);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      detailScroll(position) {

        scrollY = -position.y
        // console.log("detailScroll-----", scrollY);
        // console.log('themeTopYs--', this.themeTopYs)
        for (let i = this.themeTopYs.length - 1; i >= 0; i--) {
          if (scrollY > this.themeTopYs[i]) {
            this.currentIndex = i
            // 也可以不需要使用props传递参数，直接获取子组件的变量然后复制, 如下：
            this.$refs.detailNav.currentIndex = this.currentIndex
            break
          }
        }
        // console.log('titleIndex--', this.titleIndex)

        // 2. 决定tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > BACK_POSITION

      }
    },
    destroyed() {
      console.log('destroyed----------------');
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    updated() {
      // 组件创建后调用， 可用于更新themeTopY
      // 但依然存在图片没有加载完成的问题
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log('themeTopYs:' + this.themeTopYs);
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
    height: calc(100% - 44px - 50px);
    background-color: #fff;
  }

</style>
