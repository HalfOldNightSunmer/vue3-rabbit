import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'

export const useCategory = () => {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id) => {
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.data.result
        console.log(res.data.result)
    }
    getCategory(route.params.id)

    onBeforeRouteUpdate((to) => {
        // to是目标路由
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}

