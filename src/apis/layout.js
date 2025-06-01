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
    return  instance({url: 'home/hot'})
  }