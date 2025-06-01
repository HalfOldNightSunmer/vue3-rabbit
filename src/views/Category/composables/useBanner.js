import { getBanner } from '@/apis/layout'
import { onMounted, ref } from 'vue';
export const useBanner = () => {
    const bannerList = ref([])

    onMounted(async () => {
        const res = await getBanner()
        bannerList.value = res.data.result
        // console.log(res.data);
    })
    return { bannerList }
}
