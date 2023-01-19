<template>
  <div class="goodListItem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" @load="imageItem">
    </a>
    <div class="goods-info">
      <p>
        {{ goodsItem.title }}
      </p>
      <span class="price">{{ goodsItem.price }}</span>
      <img class="view" src="~assets/img/collect.svg" alt="">

      <span class="collect"> {{ goodsItem.cfav }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'goodListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageItem() {
      this.$bus.$emit('imageItemload')
    }
  }
}
</script>

<style scoped>
.goodListItem {
  width: 45%;
  padding-bottom: 40px;
  position: relative;
}

.goodListItem img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 18px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
}

.goodListItem .price {
  color: var(--color-high-text);
}

.collect {
  /* margin-left: 5px; */
}

.goodListItem .view {
  display: inline-block;
  width: 20px;
  height: 18px;
}
</style>