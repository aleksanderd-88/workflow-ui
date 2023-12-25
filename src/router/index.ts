import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import { setPageTitle } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Welcome'
      },
      children: [{
        path: '/notes/create',
        name: 'create',
        component: () => import('@/pages/Notes/CreateNote.vue'),
        meta: {
          title: 'Create new note'
        }
      }]
    }
  ]
})

router.afterEach((to) => {
  setPageTitle(to.meta?.title as string)
})

export default router
