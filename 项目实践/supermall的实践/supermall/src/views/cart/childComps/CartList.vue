<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :item-info="item" :key="index"></cart-list-item>
    </scroll>

  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/cart/childComps/CartListItem";
  export default {
    name: "CartList",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Scroll,
      CartListItem
    },
    activated() {

      // 添加数据后重新刷新高度，否则可能出现不能滚动的情况
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>

  .cart-list {
    height: calc(100% - 44px - 50px - 40px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
