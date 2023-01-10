module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'assets': '@/assets',
        'common': '@/common'
      }
    }
  }
}