<template>
  <div class="goodslist">
    <goodListItem v-for="item in goods" :goodsItem="item"></goodListItem>
    <!-- {{ goods }} -->
  </div>
</template>

<script>
import goodListItem from './goodListItem.vue'
export default {
  name: 'goodlist',
  components: {
    goodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>