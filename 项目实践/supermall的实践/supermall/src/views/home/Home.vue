<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" v-bind:probe-type="3"
            @scroll="contentScroll" v-bind:pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control class='tab-control' :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
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
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1. 请求多个数据
      this.getHomeMulitdata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
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
        return {
          data: {
            banner: {
              list: [{
                link: 'baidu.com',
                image: '~assets/server/imgs/home/woman-4707542__340.jpg'
              }, {
                link: 'baidu.com',
                image: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }, {
                link: 'baidu.com',
                image: '~assets/server/imgs/home/swiper/girl-5846483__340.webp'
              }]
            },
            recommend: {
              list: [{
                link: 'baidu.com',
                image: 'xx'
              }, {
                link: 'baidu.com',
                image: 'xx'
              }, {
                link: 'baidu.com',
                image: 'xx'
              }]
            }
          }
        }
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

        })
      },
      getHomeGoodsDemo(type) {
        return {
          data: {
            list:  [{
              type: type,
              price: 190,
              cfav: 200,
              show: {
                img: '~assets/server/imgs/home/woman-4707542__340.jpg'
              },
            }, {
              type: type,
              price: 149,
              cfav: 160,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            }, {
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            },{
              type: type,
              price: 600,
              cfav: 10,
              show: {
                img: '~assets/server/imgs/home/swiper/woman-4707542__340.jpg'
              }
            }]
          }
        }
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
      },
      backClick() {
        console.log("backClick");
        // 参数为（坐标x, 坐标y, 返回持续的事件(ms)）
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        // console.log(position);
        // 因为数据较少，要根据具体的手机信号设置该值，否则看不到效果，目前该值使用Moto G4可以看到效果
        this.isShowBackTop = (-position.y) > 200

      },
      loadMore() {
        console.log("home上拉加载更多");
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    top: 44px;
    z-index: 9;
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
</style>
