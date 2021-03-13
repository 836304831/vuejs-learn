<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/imgs/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },

  }
</script>

<style scoped>
  .check-button {
    /*background-color: pink;*/
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    background-color: red;
    border-color: red;
  }
</style>
