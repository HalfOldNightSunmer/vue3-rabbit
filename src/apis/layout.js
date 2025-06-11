import instance from '@/utils/request'


export function getCategory() {
    return instance.get('/home/category/head')
}


export function getBanner() {
    return instance.get('/home/banner')
}



/**
* @description: 获取新鲜好物
* @param {*}
* @return {*}
*/
export const findNewAPI = () => {
    return instance({
        url: '/home/new'
    })
}



/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return instance({ url: 'home/hot' })
}



/**
* @description: 获取所有商品模块
* @param {*}
* @return {*}
*/
export const getGoodsAPI = () => {
    return instance({
        url: '/home/goods'
    })
}




/**
 * 
 * @param {获取详情} id 
 * @returns 
 */
export const getDetail = (id) => {
  return instance({
    url: '/goods',
    params: {
      id
    }
  })
}