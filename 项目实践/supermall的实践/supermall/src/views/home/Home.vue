<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>

    <!-- 为了解决在滑动到一定位置，固定 tab-control，默认不显示   -->
    <tab-control ref= "tabControlFirst" :titles="['流行', '新款', '精选']" @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed"></tab-control>


    <scroll class="content" ref="scroll" v-bind:probe-type="3"
            @scroll="contentScroll" v-bind:pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"  @SwiperImageLoad="SwiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>

      <!--  通过fixed样式固定tab-control 在使用better-scroll时不生效    -->
      <tab-control ref= "tabControl" :titles="['流行', '新款', '精选']" @tabClick="tabClick"
                   :class="{fixed: isTabFixed}"></tab-control>
      <ul>当前产品类型：{{currentType}}</ul>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 修饰符.vative的使用
       在我们需要监听一个组件的原生事件时，必须给对应的事件加上native修饰符，才能进行监听-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import BackTop from "@/components/backTop/BackTop";

  import {getHomeMulitdata, getHomeGoods} from "@/network/home";
  import {debounce} from "@/common/utils"

  import {getHomeMulitdataDemo, getHomeGoodsDemo} from "./demoData"

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      FeatureView,

      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
    },
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    destroyed() {
      console.log("home destroyed");
    },
    activated() {
      console.log('actived');
      this.$refs.scroll.scrollTo(0, -this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY);
    },
    created() {
      // 1. 请求多个数据
      this.getHomeMulitdata()

      // 2. 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      // 监听item图片完成， 图片加载完成的事件监听
      // this.$bus.$on("itemImageLoad", () => {
      //   console.log("itemImageLoad -------------")
      //   // 每加载一张图片刷新一次，过于频繁，需要进行防抖动操作
      //   this.$refs.scroll.refresh()
      // })

      // 防抖动操作
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on("itemImageLoad", () => {
        // 防抖动函数调用
        refresh()
      })
    },
    methods: {
      // 网络请求相关算法
      getHomeMulitdata() {
        getHomeMulitdata().then(res => {
          console.log(res);

          // 替换网络请求数据, 服务器没有搭建，暂时使用本地图片替代
          res = this.getHomeMulitdataDemo()

          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeMulitdataDemo() {
        return getHomeMulitdataDemo()
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res)

          // 替换网络请求数据
          res = this.getHomeGoodsDemo(type)
          // 数据添加的列表中
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上来加载更多刷新
          this.$refs.scroll.finishPullingUp()
        })
      },
      getHomeGoodsDemo(type) {
        return getHomeGoodsDemo(type)
      },

      // 时间监听方法
      tabClick(tabControlIndex) {
        console.log(tabControlIndex);
        switch (tabControlIndex) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControlFirst.currentIndex = tabControlIndex
        this.$refs.tabControl.currentIndex = tabControlIndex
      },
      backClick() {
        console.log("backClick");
        // 参数为（坐标x, 坐标y, 返回持续的事件(ms)）
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        // 1. 判断backTop是否显示
        // console.log(position);
        // 因为数据较少，要根据具体的手机信号设置该值，否则看不到效果，目前该值使用Moto G4可以看到效果
        this.isShowBackTop = (-position.y) > 200

        // 2. 决定tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
        console.log("isTabFixed: " + this.isTabFixed);
      },
      loadMore() {
        console.log("home上拉加载更多");
        this.getHomeGoods(this.currentType)
      },
      SwiperImageLoad() {
        // 获取tabControl的offsetTop
        // 所有的组件都有一个属性el：用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        console.log('tabOffsetTop: ' + this.tabOffsetTop)
      }

    }
  }
</script>

<style scoped>
  #home {
    /*padding: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    /* 在使用六拉你去原生滚动时，为了让导航不跟随一起滚动，若使用beeter-scroll就可以不用这些属性*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .content {
    /*height: 300px;*/
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;

    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
