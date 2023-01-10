<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: String,
    isActiveColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.link)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.link)
    },
    activeStyle() {
      return this.isActive ? { color: this.isActiveColor } : {}
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  vertical-align: middle;
}

img {
  width: 24px;
  height: 24px;
}
</style>