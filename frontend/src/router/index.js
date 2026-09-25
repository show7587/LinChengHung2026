import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../pages/HomeView.vue'
import AchievementsView from '../pages/AchievementsView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: 'achievements',
        name: 'AchievementsView',
        component: AchievementsView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
