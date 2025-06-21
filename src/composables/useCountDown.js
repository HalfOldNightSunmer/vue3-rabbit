import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {

    const time = ref(0)
    const timeOver = ref(null)

    const remainTime = computed(() => 
        dayjs.unix(time.value).format('mm分ss秒')
    )

    const getTime = (currentTime) => {
        console.log('currentTime', currentTime);
        
        time.value = Number(currentTime)
        timeOver.value = setInterval(() => {
            time.value--
        }, 1000)
    }

    onUnmounted(() => {
        timeOver?.value && clearInterval(timeOver.value)
    })


    return { remainTime, getTime }
}