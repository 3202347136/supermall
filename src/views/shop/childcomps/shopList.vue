<template>
  <div class="shopList">
    <Scroll class="content" ref="scroll">
      <ShopListItem v-for="(item, index) in cartList" :key="index" :product="item"></ShopListItem>
    </Scroll>
  </div>
</template>

<script>
import ShopListItem from './shopListItem.vue'
import { mapGetters } from 'vuex';
import Scroll from 'components/common/scroll/scroll'
  export default {
    name: 'shopList',
    computed: {
      ...mapGetters(['cartList'])
    },
    components: {
      Scroll,
      ShopListItem
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
.shopList {
  height:  calc(100vh - 44px - 49px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>