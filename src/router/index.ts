import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EyesFollow from '@/views/EyesFollow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/facetest',
      name: 'face-test',
      component: EyesFollow
    }
  ]
})

export default router
