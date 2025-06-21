import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { insertCartAPI, getCartListAPI, deleteCartAPI } from '../apis/cart'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])

    const userStore = useUserStore()
    const isLogin = computed(() => Boolean(userStore.userInfo?.result?.token))

    const updateNewList = async () => { 
        const res = await getCartListAPI()
        cartList.value = res.data.result
        console.log('获取购物车列表成功');
    }


    // 添加购物车商品
    const addCart = async (goods) => {
        if (isLogin.value) {
            console.log('登录状态:',userStore.userInfo?.result?.token);
            
            const {skuId, count} = goods
            await insertCartAPI({skuId, count})
            updateNewList()
        } else {
            const addGoods =  cartList.value.find(item => item.skuId === goods.skuId)
            if (addGoods) {
                addGoods.count ++
                addGoods.price = Number(addGoods.price)  + Number(goods.price)
            } else {
                cartList.value.push(goods)
            }
        }
    }

    // 删除单个购物车
    const delCart = async (skuId) =>{
        console.log('删除购物车：' + skuId)
        // cartList.value = [...cartList.value.filter(item => item.skuId !== skuId)]
        // console.log('过滤后的数组：',cartList.value)
        if (isLogin.value) {
            await deleteCartAPI([skuId])
            updateNewList()
        } else {
            const index = cartList.value.findIndex(item => item.skuId === skuId)
            cartList.value.splice(index, 1)
        }
    }

    const allCount = computed(() => 
        cartList.value.reduce((sumCount, element) => {
        return Number(sumCount) + Number(element.count)
    }, 0) 
    )  
    
    const allPrice = computed(() => 
        cartList.value.reduce((sumPrice, element) => {
        return Number(sumPrice) + Number(element.price)
    }, 0)
    )

    // 单选
    const singleCheck = (selected, skuId) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }

    // 全选
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    // 清空购物车
    const clearCart = async () => {
        if (isLogin.value) {
            console.log('清空购物车', userStore.userInfo?.result?.token);
            await deleteCartAPI(cartList.value.map(item => item.skuId))
        }
        cartList.value = []
    }

    return { cartList, addCart, delCart, 
        allCount, allPrice,
        singleCheck, allCheck, clearCart }
},
{
    persist: true
})