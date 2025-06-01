import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Category from '../views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          compenent: Home
        },
        {
          path: 'category',
          compenent: Category
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
    },
  ],
})

export default router
