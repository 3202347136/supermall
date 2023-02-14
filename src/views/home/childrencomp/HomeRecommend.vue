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
  margin: auto;
  width: 100%;
  height: 20%;
  display: flex;
  text-align: center;
  border-bottom: 10px #eee solid;
  margin-top: -5px;
}

.recommend-text {
  text-align: center;
}

.recommend-img {
  width: 75%;
  height: 60%;
  margin-bottom: 10px;
  margin-top: 25px;
}

.recommend-item {
  flex: 1;
}
</style>