import request from '@/utils/request'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}



export function getBannerAPI(params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return request({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}