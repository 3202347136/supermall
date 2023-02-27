<template>
  <div id="detail">
    <DetailNavBar class="detail-navbar" @titleClick="titleClick" ref="navBar"></DetailNavBar>
    <Scroll class="detail-content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailInfo :detailInfo="detailInfo" @imgLoad="imgLoad" ref="detailInfo"></DetailInfo>
      <ItemParams :itemParams="itemParams" ref="params"></ItemParams>
      <CommentInfo :commentInfo="commentInfo" ref="comment"></CommentInfo>
      <GoodsList :goods="recommends" class="goodsList" ref="recommend"></GoodsList>
    </Scroll>
    <DetailBottomBar @addToCard="addToCard"></DetailBottomBar>
    <BackTop @click.native="backTop" v-show="isShowBack"></BackTop>
    <Toast :isShow="isShow" :message="message"></Toast>
  </div>
</template>

<script>
import GoodsList from 'components/content/GoodList/goodList'
import Scroll from 'components/common/scroll/scroll'
import DetailNavBar from './childrencomponents/DetailNavBar.vue'
import DetailSwiper from 'components/content/DetailSwiper/detailswiper'
import DetailBaseInfo from './childrencomponents/DetailBaseInfo.vue'
import DetailShopInfo from './childrencomponents/DetailShopInfo.vue'
import DetailInfo from './childrencomponents/DetailInfo.vue'
import ItemParams from './childrencomponents/ItemParams.vue'
import CommentInfo from './childrencomponents/CommentInfo.vue'
import DetailBottomBar from './childrencomponents/DetailBottomBar.vue'
import BackTop from 'components/content/BackTop/backTop'
import Toast from 'components/common/toast/toast'

import { getDetail, GoodsInfo, getShop, getRecommend } from 'network/detail'
import { itemListenerMixin } from 'common/mixin'
import { debouce } from '../../common/debouce'
export default {
  name: 'Detail',
  components: {
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    ItemParams,
    CommentInfo,
    DetailBottomBar,
    BackTop,
    Scroll,
    Toast
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      itemListener: null,
      topYs: [],
      getTopY: null,
      currentIndex: 0,
      isShowBack: false,
      isShow: false,
      message: ''
    }
  },
  mixins: [itemListenerMixin],
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.data.result
      //保存轮播图图片信息
      this.topImage = data.itemInfo.topImages
      //保存商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      //保存具体商品订单信息
      this.shop = new getShop(data.shopInfo)
      //保存详情页信息
      this.detailInfo = data.detailInfo
      //保存参数信息
      this.itemParams = data.itemParams
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.data.list
    })
  },
  mounted() {
    this.getTopY = debouce(() => {
      this.topYs = []
      this.topYs.push(0)
      this.topYs.push(this.$refs.params.$el.offsetTop)
      this.topYs.push(this.$refs.comment.$el.offsetTop)
      this.topYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.topYs)
    })
  },
  updated() {

  },
  methods: {
    imgLoad() {
      this.newrefresh()
      this.getTopY()
    },
    titleClick(index) {
      this.$refs.scroll.backToTop(0, -this.topYs[index])
    },
    backTop() {
      this.$refs.scroll && this.$refs.scroll.backToTop(0, 0, 500)
    },
    contentScroll(position) {
      const positionY = -position.y
      for (let i = 0; i < this.topYs.length; i++) {
        if (this.currentIndex !== i && ((i < this.topYs.length - 1 && positionY >= this.topYs[i] && positionY < this.topYs[i + 1])
          || (i === this.topYs.length - 1 && positionY >= this.topYs[i]))) {
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      }
      //是否返回顶部
      this.isShowBack = (-position.y) > 1000
    },
    addToCard(){
      //获取购物车需要的信息
      const product = {}
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch('resolve', product).then( res => {
        this.isShow = true
        this.message = res
        setTimeout(()=>{
          this.isShow = false
        },1000)
      })
      //提交购物车成功
    }
  },
  destroyed() {
    this.$bus.$off('imageItemload', this.itemListener)
  }

}
</script>

<style scoped>
#detail {
  height: 100vh;
}

.detail-content {
  height: calc(100% - 44px - 49px);
}

.detail-navbar {
  position: relative;
  z-index: 9999;
  background-color: #fff;
}

.goodsList {
  margin-top: 10px;
  padding-top: 20px;
  border-top: 8px #F5F4FB solid;
}
</style>