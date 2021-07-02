import Layout from '@/layout'

// 某些路由
export const someRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    meta: { title: 'Home', icon: 'home' },
    children: [
      { path: '', component: () => import('../views/home') }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    meta: { title: 'About', icon: 'about' },
    children: [
      { path: '', component: () => import('../views/about') }
    ]
  }
]
