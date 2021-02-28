<template>
<!--  <h2>分类</h2>-->
  <div class="wrapper">
    <ul class="content">
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
      <li>分类</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        // probeType参数
        // 0, 1 都是不政策实时的位置，0是系统默认值，1是手动默认值
        // 2: 在手指滚动的过程中检测，手指离开后的关心滚动过程中不侦测
        // 3： 只要是滚动都侦测
        probeType: 3,
        // 设置下拉加载更多事件
        pullUpLoad: true
      })
      this.scroll.on('scroll', (position) => {
        console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: pink;
    overflow: hidden;

    /* 原生滚动条使用方式 */
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
