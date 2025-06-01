import instance from '@/utils/request'


export function getCategory() {
  return instance.get('/home/category/head')
}