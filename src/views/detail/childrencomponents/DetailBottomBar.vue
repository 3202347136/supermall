<template>
  <div class="detail-bottom">
    <div class="message">
      <img src="~assets/img/talk.svg" alt=""> <span>客服</span>
    </div>
    <div class="message">
      <img src="~assets/img/market.svg" alt=""> <span>店铺</span>
    </div>
    <div class="message">
      <img src="~assets/img/collect.svg" alt=""> <span>收藏</span>
    </div>
    <div class="right">
      <div class="add" @click="add">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    add(){
      this.$emit('addToCard')
    }
  }
}
</script>
<style scoped>
.detail-bottom {
  position: relative;
  background-color: #fff;
  height: 49px;
}

.detail-bottom .message {
  float: left;
  margin-left: 20px;
}

.detail-bottom .message {
  margin-top: 6px;
}

.detail-bottom div img {
  display: block;
  width: 25px;
  height: 25px;
  line-height: 49px;
  margin: auto;
}

.add,
.buy {
  font-size: 18px;
  text-align: center;
  line-height: 49px;
  width: 130px;
  height: 100%;
}

.add {
  float: left;
  background-color: yellow;
}

.buy {
  float: left;
  background-color: pink;
  color: #fff;
}

.detail-bottom .buy {
  margin-left: 0;
}
.right {
 float: right;
}

</style>