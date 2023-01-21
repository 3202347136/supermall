<template>
  <div id="home-swiper">
    <swiper ref="homeSwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners">
        <a :href="banners[index].link">
          <img :src="banners[index].image" alt="" width="100%" height="100%" @load="imageLoad">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeswiper',
  components: {},
  props: {
    banners: Array
  },
  data() {
    return {
      swiperOptions: {
        effect: 'slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }

      },
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('imageLoad')
        this.isLoad = true
      }

    }
  }
}

</script>

<style scoped>
.swiper-container {
  margin: auto;
  width: 100%;
  height: 100%;
  padding-bottom: -8px;
}

.swiper-pagination {
  margin: auto;
}
</style>