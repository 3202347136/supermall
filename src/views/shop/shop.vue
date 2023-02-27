<template>
  <div>
    <NavBar class="navBar">
      <div slot="center">购物车({{ length }})</div>
    </NavBar>
    <ShopList></ShopList>
    <ShopBottomBar></ShopBottomBar>
  </div>
</template>

<script>
import ShopList from './childcomps/shopList.vue'
import NavBar from 'components/common/navbar/NavBar'
import ShopBottomBar from './childcomps/shopBottomBar.vue'
//从vuex里导入辅助函数mapGetters
import { mapGetters } from 'vuex';
export default {
  name: 'shop',
  components: {
    NavBar,
    ShopList,
    ShopBottomBar
  },
  computed: {
    //辅助函数mapGetters把getters的方法直接转化为计算属性
  //  ...mapGetters(['cartLength','cartList'])
  ...mapGetters({
    length: 'cartLength'
  })
  }
}
</script>

<style scoped>
.navBar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500;
}

</style>