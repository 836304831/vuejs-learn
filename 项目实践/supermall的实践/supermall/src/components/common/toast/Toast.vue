<template>
  <!--待解决， isShow不会随js中的值变化而变化，导致无法显示-->
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        msg: "",
        isShow: false
      }
    },
    methods: {
      show(message='hello', duration=2000) {
        console.log('show toast--------', message, duration)
        this.isShow = true
        this.msg = message
        console.log('isShow', this.isShow)
        setTimeout(() => {
          this.isShow = false
          this.msg = ""
          console.log('isShow', this.isShow)
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left:  50%;
    transform: translate(-50%, -50%);

    padding: 8px 10px;
    color: #fff;

    z-index: 1000;
    /*background-color: red;*/
    background-color: rgba(0, 0, 0, 0.75);
  }
</style>
