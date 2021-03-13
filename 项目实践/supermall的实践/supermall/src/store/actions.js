
export default {
  addCart(context, payload) {
    // patload为新添加的商品
    // 1. 查找之前数据中是否有该商品
    let oldProduct = context.state.cartList.find(item => {
      return item.iid === payload.iid
    })
    if (oldProduct) {
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      context.commit('addCart', payload)
    }
  }
}
