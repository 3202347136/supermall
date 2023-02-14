<template>
  <div v-if="Object.keys(goods).length !== 0" class="baseInfo">
    <div class="info-title">{{ goods.title }}</div>
    <span class="info-price">{{ goods.newPrice }}</span>
    <span class="info-oldprice">{{ goods.oldPrice }}</span>
    <span class="info-discount">{{ goods.discount }}</span>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span class="info-service-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
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
      default: {}
    }
  }
}
</script>

<style scoped>
.base-info {
  width: 100%;
}

.info-title {
  margin: 5px 8px;
  font-size: 22px;
  font-weight: 450;
}

.info-price {
  font-size: 30px;
  color: pink;
  font-weight: 500;
  margin: 5px 8px;
}

.info-oldprice {
  text-decoration: line-through;
  color: #999397;
}

.info-discount {
  position: relative;
  bottom: 10px;
  left: 8px;
  display: inline-block;
  width: 70px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: pink;
  color: white;
  border-radius: 10px;
}

.info-other {
  padding: 20px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #F5F4F6;
}

.info-other span {
  text-align: center;
  color: #999397;

}

.info-services {
  display: flex;
}

.info-services .info-service-item {
  flex: 1;
  padding: 40px 0;
  text-align: center;
  border-bottom: 5px solid #F5F4F6;
}

.info-services img {
  width: 18px;
  height: 18px;
  vertical-align: bottom;

}
</style>