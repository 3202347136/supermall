<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">我是购物街</div>
    </NavBar>
    <Scroll class="content" ref="backTop" @scroll="contentScroll" :probe-type="3" :pull-up-load="true"
      @pullingUp="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <Homerecommend :recommends="recommends"></Homerecommend>
      <Homefeature></Homefeature>
      <Tabcontrol class="tabcontrol" :titles="['流行', '新款', '精选']" @tabclick="tabclick"></Tabcontrol>
      <Goodlist :goods="goods[currentType].list"></Goodlist>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBack"></BackTop>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home.js'

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'components/common/swiper/swiper'
import Scroll from 'components/common/scroll/scroll'

import Homerecommend from './childrencomp/HomeRecommend'
import Homefeature from './childrencomp/HomeFeature'

import Tabcontrol from 'components/content/Tabcontrol/Tabcontrol'
import Goodlist from 'components/content/GoodList/goodList'
import BackTop from 'components/content/BackTop/backTop'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    Scroll,
    Homerecommend,
    Homefeature,
    Tabcontrol,
    Goodlist,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      result: null,
      currentType: 'pop',
      isShowBack: false
    }
  },
  mounted() {
    //请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /** 
      *事件监听相关方法
      */
    contentScroll(position) {
      // console.log(position)
      this.isShowBack = (-position.y) > 1000
    },
    backTop() {
      this.$refs.backTop.backToTop(0, 0, 500)
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    /** 
       *网络请求相关方法
       */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        this.result = res
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },

  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
}

.tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 99;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>