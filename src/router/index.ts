import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import { setPageTitle } from '@/utils'
import { useNoteStore } from '@/modules/Note/stores'

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
      beforeEnter() {
        useNoteStore().listNotes().then(() => true)
      },
      children: [{
        path: `/notes/:id/edit`,
        name: 'edit',
        component: () => import('@/pages/Notes/NoteView.vue'),
        meta: {
          title: 'Edit note'
        },
        beforeEnter(to) {
          const id = to.params?.id?.toString()
          if ( !id )
            return false
          
          useNoteStore().getNoteData(id).then(() => true)
        }
      }, {
        path: `/notes/create`,
        name: 'create',
        component: () => import('@/pages/Notes/NoteView.vue'),
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
