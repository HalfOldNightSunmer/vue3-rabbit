import instance from '@/utils/request'

export function loginAPI ({ account, password}) {
    return instance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}