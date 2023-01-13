<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">我是购物街</div>
    </NavBar>
    <homeSwiper :banners="banners"></homeSwiper>
    <homerecommend :recommends="recommends"></homerecommend>
    <homefeature></homefeature>
    <tabcontrol class="tabcontrol" :titles="['流行', '新款', '精选']" @tabclick="tabclick"></tabcontrol>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表14</li>
      <li>列表15</li>
    </ul>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home.js'

import NavBar from 'components/common/navbar/NavBar'

import homeSwiper from 'components/common/swiper/swiper'
import homerecommend from './childrencomp/HomeRecommend'
import homefeature from './childrencomp/HomeFeature'

import tabcontrol from 'components/content/Tabcontrol/Tabcontrol'
export default {
  name: 'home',
  components: {
    NavBar,
    homeSwiper,
    homerecommend,
    homefeature,
    tabcontrol
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
      result: null
    }
  },
  created() {
    this.getHomeMultidata()
    // this.getHomeGoods('pop')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        this.result = res
      })
    },
    // getHomeGoods(type) {
    //   let page = this.goods[type].page + 1
    //   getHomeGoods(type, page).then(res => {
    //     this.goods[type].list.push(...res.data.list)
    //   })
    // },
    tabclick(index) {
      console.log(index)
    }
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}

.tabcontrol {
  position: sticky;
  top: 44px;
}
</style>