import request from '@/utils/request'


// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }



  //获取购物车列表
export const getCartListAPI = () => {
    return request({
      url: '/member/cart'
    })
  }


//   删除购物车
export const deleteCartAPI = (ids) => {
    return request({
      url: '/member/cart',
      method: 'DELETE',
      data: {ids}
    })
  }

  // 合并购物车
  export const mergeCartAPI = (data) => {
    return request({
      url: '/member/cart/merge',
      method: 'POST',
      data
    })
  }