<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      {{ detailInfo.desc }}
    </div>
    <div class="key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="image">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  data() {
    return {
      imgLength: 0
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.image img {
  width: 100%;
  height: 100%;
}

.desc {
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
}

.key {
  margin-top: 20px;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
}
</style>