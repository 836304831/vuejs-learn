
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLen}})</div>
    </nav-bar>
    <cart-list :cart-list="cartProductList"></cart-list>
    <cart-bottom-bar>
      cart-bottom-bar
    </cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "@/views/cart/childComps/CartList";
  import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      //  直接使用store中的getters属性,  方法1
      // ...mapGetters([
      //   'catLength',
      //   'cartList'
      // ]),

      //  直接使用store中的getters属性,  方法2：对属性重命名
      ...mapGetters({
        cartLen: 'catLength',
        cartProductList: 'cartList'
      })

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
