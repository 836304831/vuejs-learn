<template>
  <!-- ref/children -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1. 创建BScroll对象
      // ********** click参数说明 ********
      // 1. 无论是否设置click:false， button都可以点击
      // 2. 必须设置click：true, 才能监听div的点击事件
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2. 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // 3. 上拉加载更多
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
      })

    },
    methods: {
      scrollTo(x, y, time=500) {
        // 参数为（坐标x, 坐标y, 返回持续的事件(ms)）
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        // 需要先判断scroll是否为空，为空时报错
        console.log('refresh --------- ')
        this.scroll && this.scroll.refresh()
      },
      finishPullingUp() {
        this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y: 0
      }
    }
  }
</script>

<style scoped>

</style>
