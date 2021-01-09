<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/imgs/tabbar/zanshang-01.jpg" alt="">

      <img slot="item-icon-active" src="~assets/imgs/tabbar/zanshang-01.jpg" alt="">
      name="item-icon-active"
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="../assets/imgs/tabbar/huluwa-01.jpg" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/zanshang-01.jpg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="../assets/imgs/tabbar/zanshang-02.jpg" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/zanshang-01.jpg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <img slot="item-icon" src="../assets/imgs/tabbar/me-01.png" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/zanshang-01.jpg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {

  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
