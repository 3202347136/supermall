<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">我是购物街</div>
    </NavBar>
    <homeSwiper :banners="banners"></homeSwiper>
    <recommend :recommends="recommends"></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home.js'
import homeSwiper from 'components/common/swiper/swiper'
import recommend from './childrencomp/HomeRecommend'
export default {
  name: 'home',
  components: {
    NavBar,
    homeSwiper,
    recommend
  },
  data() {
    return {
      banners: [],
      recommends: [],
      result: null
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
      this.result = res
    })
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
</style>