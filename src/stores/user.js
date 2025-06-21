import { defineStore } from "pinia";
import { ref } from 'vue'
import { loginAPI } from '@/apis/login'
import { useCartStore } from '@/stores/cartStore'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI( {account, password})
        userInfo.value = res.data
    }

    const clearUserInfo = () => {
        userInfo.value = {}
    }

    return { userInfo, getUserInfo, clearUserInfo }
},
// 启用持久化localStorage
{
    persist: true
}
)