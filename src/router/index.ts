import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PersonView from '@/views/PersonView.vue'
import ShowView from '@/views/ShowView.vue'
import ShareView from '@/views/ShareView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/person',
      name: 'person',
      component: PersonView,
    },
    {
      path: '/show',
      name: 'show',
      component: ShowView,
    },
    {
      path: '/share',
      name: 'share',
      component: ShareView,
    },
  ],
})

export default router
