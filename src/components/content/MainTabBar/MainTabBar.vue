<template>
  <div>
    <TabBar>
      <TabBarItem link="/home" isActiveColor="blue">
        <img slot="item-icon" src="~assets/img/picture1.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/picture6.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem link="/category" isActiveColor="pink">
        <img slot="item-icon" src="~assets/img/picture3.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/picture5.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem link="/shop">
        <img slot="item-icon" src="~assets/img/picture2.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/picture7.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem link="/profile" isActiveColor="yellow">
        <img slot="item-icon" src="~assets/img/picture4.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/picture8.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>