import MainLayout from '@/layouts/MainLayout.vue'
import MicrositeLayout from '@/layouts/MicrositeLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from './mainRoutes'
import { microSitesRoutes } from './microSitesRoutes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainLayout,

      children: [...mainRoutes]
    },
    {
      path: '/bptd/:branch',
      name: 'MicrositePage',
      component: MicrositeLayout,
      props: true,
      children: [...microSitesRoutes]
    }
  ]
})

export default router
