<template>

  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/imgs/common/back.svg" alt="">
      </div>

      <div slot="center" class="title">
        <div v-for="(item, index) in titles" class='title-item' :class="{active: currentIndex==index}"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>

    </nav-bar>


  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    // props: {
    //   currentIndex: {
    //     type: Number,
    //     default: 0
    //   }
    // },
    data() {
      return {
        titles: ['商品', '参数', '评价', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
        // this.$router.go(-1)
      }
    },
    mounted() {
      if (this.titleIndex !== this.currentIndex) {
        this.currentIndex = this.titleIndex
      }
    }


  }
</script>

<style scoped>
  .nav-bar {
    position: relative;
    z-index: 100;
    background-color: #fff;
  }

  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 10px;
  }

</style>
