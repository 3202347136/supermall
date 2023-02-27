export default {
  resolve(context, payload){
    return new Promise((resolve, reject) => {
      let oldPrice = null
      for( let item of context.state.cartList ){
        if( item.iid === payload.iid ){
          oldPrice = item
        }
      }
        if(oldPrice){
          resolve('加入购物车成功')
          context.commit('addCart', oldPrice)
        }
        else{
          resolve('加入购物车成功')
          context.commit('addCount', payload)
        }
    })
  }
}