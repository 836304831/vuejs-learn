<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title"> {{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount" >{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
  }
  .n-price {
    color: red;
    font-size: 14px;
  }
  .o-price {
    color: #999999;
    font-size: 12px;
  }
  .discount {
    margin-top: 2px;
  }
  .info-other{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 12px;
    height: 12px;
    position: relative;
    top: 2px
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
