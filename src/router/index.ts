import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/apps/HomeView.vue'
import NotFoundView from '@/views/error/NotFound.vue'
import HelpCenterView from '@/views/apps/help-center/HelpCenterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
    {
      path: '/',
      name: 'web.home',
      component: HomeView,
    },
    {
      path: '/help-center',
      name: 'web.help-center.index',
      component: HelpCenterView,
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
      path: '/apps/event',
      name: 'apps.event.index',
      component: () => import('@/views/apps/event/EventView.vue'),
    },
    {
      path: '/apps/jobs',
      name: 'apps.jobs.index',
      component: () => import('@/views/apps/jobs/JobsView.vue'),
    },
    {
      path: '/apps/kelas',
      name: 'apps.kelas.index',
      component: () => import('@/views/apps/kelas/KelasView.vue'),
    },
    {
      path: '/apps/materi',
      name: 'apps.materi.index',
      component: () => import('@/views/apps/materi/MateriView.vue'),
    },
    {
      path: '/apps/mini-quiz',
      name: 'apps.mini-quiz.index',
      component: () => import('@/views/apps/mini-quiz/MiniQuizView.vue'),
    },
    {
      path: '/apps/mini-games',
      name: 'apps.mini-games.index',
      component: () => import('@/views/apps/mini-games/MiniGameView.vue'),
    },
    {
      path: '/apps/pergi-jajan',
      name: 'apps.kuliner.index',
      component: () => import('@/views/apps/kuliner/KulinerView.vue'),
    },
  ],
})

export default router
