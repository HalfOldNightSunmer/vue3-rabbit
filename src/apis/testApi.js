import instance from '@/utils/request'

 export function getList() {
  return instance.get('home/category/head')
}