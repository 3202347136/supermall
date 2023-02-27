<template>
  <div class="shop-list-item">
   <div class="left">
    <div class="button"  @click="getcheck">
      <CheckButton :isChecked="product.checked"></CheckButton>
    </div>
    <div class="shop-img">
      <img :src="product.image" alt="">
    </div>
   </div>
   <div class="right">
    <div class="title">
      <span>{{ product.title }}</span>
    </div>
    <div class="desc">
      <span>{{ product.desc }}</span>
    </div>
    <div class="bottom">
      <span class="price">￥{{ product.price }}</span>
      <span>x{{ product.count }}</span>
    </div>
   </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton/CheckButton'
export default {
  name: 'shopListItem',
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    getcheck(){
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
.shop-list-item {
  height: 144px;
  border-bottom: 1px solid #D7D6D7;
}
.button {
  width: 20px;
  height: 20px;
  border: #D7D6D7 1px solid;
  border-radius: 10px;
  display: inline-block;
  position: relative;
  bottom: 50px;
  left: 2px;
}
.shop-img {
  position: relative;
  left: 6px;
  display: inline-block;
  width: 95px;
  height: 120px;

}
.left {
  width: 25%;
}
.right {
  margin-top: 30px;
  width: 70%;
}
.shop-img img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-top: 12px;
}
.title {
  -webkit-box-orient: vertical;
  width: 100%;
  display: inline;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 1;
}
.desc {
  -webkit-box-orient: vertical;
  width: 100%;
  display: inline;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 1;
}
.bottom {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 18px;
}
.bottom .price {
  color: orange;
}
.check {
  border-color: red;
}
</style>