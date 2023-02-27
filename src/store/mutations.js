export default {
  addCart(state, payload) {
      payload.count++
    },
  addCount(state, payload){
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  }
  }