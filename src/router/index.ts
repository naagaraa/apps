import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/apps/HomeView.vue'
import NotFound from '@/views/error/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'web.home',
      component: HomeView,
    },
    {
      path: '/news-letter',
      name: 'web.news-letter',
      component: () => import('@/views/apps/NewsLetterView.vue'),
    },
    {
      path: '/jobs',
      name: 'web.jobs',
      component: () => import('@/views/apps/jobs/JobsView.vue'),
    },
    {
      path: '/event',
      name: 'web.event',
      component: () => import('@/views/apps/event/EventView.vue'),
    },
    {
      path: '/mercendise',
      name: 'web.mercendise',
      component: () => import('@/views/apps/Mercendise.vue'),
    },

    {
      path: '/apps/home',
      name: 'apps_home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/apps/HomeView.vue'),
    },
    {
      path: '/apps/teacher/home',
      name: 'backend_home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/backend/HomeView.vue'),
    },
  ],
})

export default router
