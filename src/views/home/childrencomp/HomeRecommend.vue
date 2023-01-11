<template>
  <div class="Recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img class="recommend-img" :src="item.image" alt="">
        <div class="recommend-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommends',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.Recommend {
  width: 750px;
  height: 200px;
  display: flex;
  text-align: center;
  border-bottom: 10px #eee solid;
}

.recommend-text {
  text-align: center;
}

.recommend-img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 15px;
}

.recommend-item {
  flex: 1;
}
</style>