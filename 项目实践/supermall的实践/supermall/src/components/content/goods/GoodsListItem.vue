<template>
  <div class="goods-item" @click="itemClick">
    <!--  因为没有搭建后台服务器，这里先使用本地图片替代  -->
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
<!--    <img src="~assets/server/imgs/home/woman-4707542__340.jpg" alt="" @load="imageLoad">-->
    <div class="goods-info">
      <span class="price">价格：{{goodsItem.price}}</span>
      <span class="collect">收藏：{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        console.log('imageLoad');
        this.$bus.$emit("itemImageLoad")
      },
      itemClick() {
        // 跳转到详情页
        console.log("跳转到详情页: " + this.goodsItem.iid);

        // 传参方式1
        this.$router.push('/detail/' + this.goodsItem.iid)

        // 传参方式2
        // this.$router.push({
        //   path: '/detail',
        //   query: {}
        // })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/imgs/common/collect.svg');
  }
</style>
