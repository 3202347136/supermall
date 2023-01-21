<template>
  <div id="detail">
    <DetailNavBar class="detailNavBar"></DetailNavBar>
  </div>
</template>

<script>
import DetailNavBar from './childrencomponents/DetailNavBar.vue'
import { getDetail } from 'network/detail'
export default {
  name: 'detail',
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      console.log(res)
    })
  }

}
</script>

<style scoped>
.detailNavBar {
  background-color: aliceblue;
}
</style>