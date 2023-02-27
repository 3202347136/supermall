import { debouce } from './debouce.js'

export const itemListenerMixin = {
  data() {
    return {
      newrefresh: null
    }
  },
  mounted() {
    this.newrefresh = debouce(this.$refs.scroll.refresh, 400)
    this.itemListener = () => {
      this.newrefresh()
    }
    this.$bus.$on('imageItemload', this.itemListener)
  }
}