
import request from '@/utils/request'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
  return request({
    url:'/member/order/pre'
  })
}

/**
 * 创建订单
 * @param {Object} data 订单信息
 */
export const createOrderAPI = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}


// 获取订单详情
export const getOrderDetailAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}