<template>
  <div id="home-swiper">
    <swiper ref="homeSwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners">
        <a :href="banners[index].link">
          <img :src="banners[index].image" alt="" width="100%" height="100%">
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
        effect: 'cube',
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

      }
    }
  }
}

</script>

<style>
.swiper-container {
  margin: auto;
  margin-top: 44px;
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  margin: auto;
}
</style>