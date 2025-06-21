import axios from 'axios';
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
})



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 请求携带token
    const useUser = useUserStore()
    const token = useUser.userInfo?.result?.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
        message: error.response.data.message,
        type: 'error'
    })
    // 登录过期判断
    if (error.response.status === 401) {
        const useUser = useUserStore()
        const router = useRouter()
        useUser.clearUserInfo()
        router.replace('/login')
    }
    return Promise.reject(error);
})
// )

export default instance;