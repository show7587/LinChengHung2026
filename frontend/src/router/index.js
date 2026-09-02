import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../pages/HomeView.vue'

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
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
