import instance from '@/utils/request'

export function loginAPI ({ account, password}) {
    return instance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}








// 获取喜欢
export const getLikeListAPI = () => {
    return instance({
      url:'/goods/relevant',
      params: {
        limit : 4
      }
    })
  }



// 获取我的订单
  export const getUserOrder = (params) => {
    return instance({
      url:'/member/order',
      method:'GET',
      params
    })
  }