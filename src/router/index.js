import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login'
import { someRoutes } from './routes'

// 公共路由（不需要登录）
export const adminRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login' },
    component: Login
  }
]

// 默认 route
const routes = [
  ...adminRoutes,
  ...someRoutes,
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: '404' },
    component: () => import('../views/error-page/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export function setRoutes(routes) {
  routes.forEach(route => router.addRoute(route))
}

export default router
