import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Category from '../views/Category/index.vue'
import SubCategory from '../views/SubCategory/index.vue'

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
