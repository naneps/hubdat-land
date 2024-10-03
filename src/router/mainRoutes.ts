export const mainRoutes = [
  {
    path: '',
    name: 'HomePage',
    meta: {
      title: 'Home Page'
    },
    component: () => import('@/views/main-page/HomePage.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    meta: {
      title: 'Profile Page'
    },
    component: () => import('@/views/main-page/ProfilePage.vue')
  },
  {
    path: '/contact',
    name: 'ContactPage',
    meta: {
      title: 'Contact Page'
    },
    component: () => import('@/views/main-page/ContactPage.vue')
  }
]
