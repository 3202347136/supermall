<template>
  <div id="detail">
    <DetailNavBar class="detail-navbar"></DetailNavBar>
    <Scroll class="detail-content" ref="scroll">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailInfo :detailInfo="detailInfo" imgLoad="imgLoad" ref="detailInfo"></DetailInfo>
      <ItemParams :itemParams="itemParams"></ItemParams>
      <CommentInfo :commentInfo="commentInfo"></CommentInfo>
      <GoodsList :goods="recommends" class="goodsList"></GoodsList>
    </Scroll>
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
import { getDetail, GoodsInfo, getShop, getRecommend } from 'network/detail'
import { itemListenerMixin } from 'common/mixin'
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
    Scroll
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
      itemListener: null
    }
  },
  mixins: [itemListenerMixin],
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      console.log(res)
      const data = res.data.result
      this.topImage = data.itemInfo.topImages
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new getShop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res => {
      console.log(res)
      this.recommends = res.data.data.list
    })
  },
  mounted() { },
  methods: {
    imgLoad() {
      this.$refs.detailInfo.refresh()
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
  height: calc(100% - 44px);
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