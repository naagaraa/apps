import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/apps/HomeView.vue'
import NotFoundView from '@/views/error/NotFound.vue'
import HelpCenterView from '@/views/apps/help-center/HelpCenterView.vue'
import NewsLetterView from '@/views/apps/NewsLetterView.vue'
import JobsView from '@/views/apps/jobs/JobsView.vue'
import JobsDetailView from '@/views/apps/jobs/JobsDetailView.vue'
import EventView from '@/views/apps/event/EventView.vue'
import EventDetailView from '@/views/apps/event/EventDetailView.vue'

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
      component: NewsLetterView,
    },
    {
      path: '/jobs',
      name: 'web.jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'web.jobs.show',
      component: JobsDetailView,
    },
    {
      path: '/event',
      name: 'web.event',
      component: EventView,
    },
    {
      path: '/event/:id',
      name: 'web.event.show',
      component: () => import('@/views/apps/event/EventDetailView.vue'),
    },
    {
      path: '/mercendise',
      name: 'web.mercendise',
      component: () => import('@/views/apps/MercendiseView.vue'),
    },
    {
      path: '/mercendise/:id',
      name: 'web.mercendise.show',
      component: () => import('@/views/apps/MercendiseDetailView.vue'),
    },
    {
      path: '/apps/event',
      name: 'apps.event.index',
      component: () => import('@/views/apps/event/EventView.vue'),
    },
    {
      path: '/apps/event/:id',
      name: 'apps.event.show',
      component: () => import('@/views/apps/event/EventDetailView.vue'),
    },
    {
      path: '/apps/jobs',
      name: 'apps.jobs.index',
      component: () => import('@/views/apps/jobs/JobsView.vue'),
    },
    {
      path: '/apps/jobs/:id',
      name: 'apps.jobs.show',
      component: () => import('@/views/apps/jobs/JobsDetailView.vue'),
    },
    {
      path: '/apps/kelas',
      name: 'apps.kelas.index',
      component: () => import('@/views/apps/kelas/KelasView.vue'),
    },
    {
      path: '/apps/kelas/:id',
      name: 'apps.kelas.show',
      component: () => import('@/views/apps/kelas/KelasDetailView.vue'),
    },
    {
      path: '/apps/materi',
      name: 'apps.materi.index',
      component: () => import('@/views/apps/materi/MateriView.vue'),
    },
    {
      path: '/apps/materi/:id',
      name: 'apps.materi.show',
      component: () => import('@/views/apps/materi/MateriDetailView.vue'),
    },
    {
      path: '/apps/mini-quiz',
      name: 'apps.mini-quiz.index',
      component: () => import('@/views/apps/mini-quiz/MiniQuizView.vue'),
    },
    {
      path: '/apps/mini-quiz/:id',
      name: 'apps.mini-quiz.show',
      component: () => import('@/views/apps/mini-quiz/MiniQuizDetailView.vue'),
    },
    {
      path: '/apps/mini-games',
      name: 'apps.mini-games.index',
      component: () => import('@/views/apps/mini-games/MiniGameView.vue'),
    },
    {
      path: '/apps/mini-games',
      name: 'apps.mini-games.show',
      component: () => import('@/views/apps/mini-games/MiniGameDetailView.vue'),
    },
    {
      path: '/apps/pergi-jajan',
      name: 'apps.kuliner.index',
      component: () => import('@/views/apps/kuliner/KulinerView.vue'),
    },
    {
      path: '/apps/pergi-jajan/:id',
      name: 'apps.kuliner.show',
      component: () => import('@/views/apps/kuliner/KulinerDetailView.vue'),
    },
    {
      path: '/apps/profile/:id',
      name: 'apps.profile.show',
      component: () => import('@/views/apps/users/UserProfileView.vue'),
    },
  ],
})

export default router
