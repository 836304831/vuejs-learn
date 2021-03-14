<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate">
      去结算({{selectNumber}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        console.log('cartList:', this.$store.getters.cartList);
        return '￥'+this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      selectNumber() {
        return this.$store.getters.cartList.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) {
          return false
        }
        // 方法1：使用filter，会遍历整个数组
        // return !(this.cartList.filter(item => item.checked).length)
        // 方法2：使用find，找到不满足的就返回，效率高一些
        return !(this.cartList.find(item => !item.checked))
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          // 全部选中，则改为全部不选中
          this.cartList.forEach(item => item.checked = false)
        } else {
          // 部分或全部不选中，则全选
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>

  .bottom-bar {
    position: fixed;
    bottom: 50px;
    display: flex;

    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #eee;

  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;

  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 30px;
    flex: 1;
    width: 100%;
  }

  .calculate {
    width: 90px;
    text-align: center;
    background-color: pink;
  }

</style>
