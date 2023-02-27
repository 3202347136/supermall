<template>
  <div>
    <nav-bar class="nav-bar">
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
    <swiper>

    </swiper>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  props: {
    topImage: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style  scoped>
.nav-bar {
  background-color: aliceblue;
}

.title {
  display: flex;
}

.title-item {
  flex: 1;
  line-height: 44px;
}

.active span {
  padding: 3px;
  border-bottom: 2px red solid;
}

.back img {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
</style>