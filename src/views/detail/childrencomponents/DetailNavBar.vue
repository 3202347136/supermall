<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/back.svg" alt="" @click="backClick">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" class="title-item" :class="{ active: currentIndex === index }"
          @click="itemClick(index)">
          <span> {{ item }}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    navBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style  scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.active span {
  padding: 3px;
  border-bottom: 2px red solid;
}

.back img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
</style>