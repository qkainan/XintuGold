import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout
    }
  ],
  // 路由滚动行为定制
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
