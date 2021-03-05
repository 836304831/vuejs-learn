<template>

  <detail-nav-bar></detail-nav-bar>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  export default {
    name: "Detail",
    components: {
      DetailNavBar
    },
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);
    },
    mounted() {
      this.iid = this.$route.params.iid
      console.log("iid" + this.iid);
    }
  }
</script>

<style scoped>

</style>
