<template>
  <div id="app">
    <MainTabBar v-show="this.$route.path.indexOf('detail') == -1"></MainTabBar>
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
