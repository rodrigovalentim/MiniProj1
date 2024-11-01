import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import HobbiesView from '../views/HobbiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: HobbiesView
    }
  ]
})

export default router
