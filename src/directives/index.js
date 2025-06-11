import { useIntersectionObserver } from '@vueuse/core'
// import {driective} from 'vue'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            // bind 绑定  el:当前元素  binding:当前指令对象（=号后面的值）
            mounted(el, binding) {
                const {stop} = useIntersectionObserver(
                    el,
                    ([{  isIntersecting }]) => {
                        if (isIntersecting) {
                            // console.log('进入可视区');
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}