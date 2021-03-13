
import BackTop from "@/components/backTop/BackTop";

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      console.log("backClick");
      // 参数为（坐标x, 坐标y, 返回持续的事件(ms)）
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }
}
