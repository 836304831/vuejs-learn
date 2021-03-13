
export default {
  // mutations唯一的目击时修改state中的状态
  // mutations中的每个方法完成的事情尽可能单一，便于使用devtool跟踪
  addCounter(state, payload) {
    payload.count ++
  },
  addCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
