<template>
  <div>
    <div class="top">
      <img :src="shop.shopLogo" alt="">
      <span>{{ shop.name }}</span>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="left-top"><span>{{ shop.sells }}</span> <span>{{ shop.goodsCount }}</span></div>
        <div class="left-bottom"><span>总销量</span><span>全部宝贝</span></div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in shop.score">
            <div>{{ item.name }}</div>
            <div>{{ item.score }}</div>
            <div v-if="!item.isBetter" class="low">
              <div class="green">低</div>
            </div>
            <div v-else class="high">
              <div class="red">高</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="into">
      进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
.into {
  width: 100px;
  height: 30px;
  background-color: bisque;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
  margin: auto;
  margin-top: 20px;
  color: white;
}

.top {
  height: 100px;
}

.top img {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 1px #F2F0F2 solid;
  border-radius: 50px;
  margin: 18px 0 0 10px;
}

.top span {
  position: relative;
  font-size: 20px;
  left: 30px;
  bottom: 30px;
}

.bottom {
  margin-top: 20px;
  height: 150px;
  display: flex;
}

.bottom div {
  flex: 1;
}

.bottom .left,
.bottom .right {
  padding: 10px 0;
}

.bottom .left {
  border-right: 1px #F2F0F2 solid;
}


.bottom .left .left-top,
.bottom .left .left-bottom {
  display: flex;
  line-height: 50px;
  height: 50px;
}

.bottom span {
  flex: 1;
  text-align: center;
}

.bottom .left span {
  font-size: 20px;
  font-weight: 500;
}

.bottom .right div {
  display: inline-block;
  flex: 1;
  text-align: center;
}

.bottom .right ul li {
  display: flex;
}

.low {
  width: 20px;
  height: 20px;
}

.high {
  width: 20px;
  height: 20px;
}

.green {
  width: 20px;
  height: 20px;
  background-color: green;
  color: white;
}

.red {
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
}

ul {
  margin-top: 20px;
  margin-left: 10px;
}
</style>