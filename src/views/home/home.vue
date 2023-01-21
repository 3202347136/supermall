<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">我是购物街</div>
    </NavBar>
    <Tabcontrol :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabcontrol1" class="TabControl"
      v-show="isTabFixed"></Tabcontrol>
    <Scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true"
      @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @imageLoad="imageLoad"></HomeSwiper>
      <Homerecommend :recommends="recommends" class="recemmends"></Homerecommend>
      <Homefeature></Homefeature>
      <Tabcontrol :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabcontrol2">
      </Tabcontrol>
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
      isShowBack: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {

    //监听图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh, 400)
    this.$bus.$on('imageItemload', () => {
      refresh()
      // this.$refs.scroll.refresh()
      // console.log('------')
    })
  },
  methods: {
    /** 
      *事件监听相关方法
      */
    debounce(fn, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    contentScroll(position) {
      // console.log(position)
      this.isShowBack = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    backTop() {
      this.$refs.scroll.backToTop(0, 0, 500)
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
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()
    },
    imageLoad() {
      // console.log(this.$refs.tabcontrol2.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
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
        this.$refs.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
}


.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.recemmends {
  background-color: #fff;
}

.TabControl {
  position: relative;
  z-index: 11;
}
</style>