<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-item" :class="{ active: currentIndex === index }"
      @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  font-size: 18px;
}

.tab-item {
  flex: 1;
}

.tab-item span {
  padding: 3px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px red solid;
}
</style>