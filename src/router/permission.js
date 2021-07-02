import router, { adminRoutes } from './index'
import { getToken } from '@/utils/auth'

const whiteMap = {}
adminRoutes.forEach(route => {
  /**
   * * 这里简单判断是不是不需要登录就可以访问的页面，实际判断应该比这个复杂，我简写
   */
  whiteMap[route.path] = true
})

router.beforeEach((to, from, next) => {
  const isLogined = getToken()

  if (isLogined) {
    // 已登录
  } else {
    const toPath = to.path
    if (!whiteMap[toPath]) {
      next('/login')
    }
  }
  next()
})
