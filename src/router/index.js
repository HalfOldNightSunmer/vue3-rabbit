import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Category from '../views/Category/index.vue'
import SubCategory from '../views/SubCategory/index.vue'
import Detail from '../views/Detail/index.vue'
import CartList from '../views/CartList/index.vue'
import Order from '@/views/CartList/components/order.vue'
import Pay from '@/views/CartList/components/pay.vue'
import Paycallback from '@/views/CartList/components/paycallback.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'cartList',
          name: 'cartList',
          component: CartList
        },
        {
          path: 'order',
          name: 'order',
          component: Order
        },
        {
          path: 'pay/:id',
          name: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: Paycallback
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          children: [
            {
              path: '',
              redirect: 'member/user'
            },
            {
              path: 'user',
              name: 'member-list',
              component: UserInfo
            },
            {
              path: 'order',
              name: 'member-order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login,
    }
  ],
  // 设置路由切换滚动条回到首页
  scrollBehavior() {
    return{
      top: 0
    }
  }
})

export default router
