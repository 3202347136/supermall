import { debouce } from './debouce.js'

export const itemListenerMixin = {
  mounted() {
    let newrefresh = debouce(this.$refs.scroll.refresh, 400)
    this.itemListener = () => {
      newrefresh()
    }
    this.$bus.$on('imageItemload', this.itemListener)
  }
}