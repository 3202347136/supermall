<template ref="backTop">
  <div class="wrapper" ref="aaa">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    }),
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      }),
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
  },
  methods: {
    backToTop(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>