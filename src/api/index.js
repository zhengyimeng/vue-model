/**
 * 这里封装你的 api，调用的时候 参数 应该以这里的方法为准
 */

// import { request } from '@/utils'

export function getUserBalance() {
  // return request.get('/api/getUserBalance')
  return new Promise(resolve => resolve({ // 这里没有后台，所以模仿一个返回
    data: { userBalance: { cny: 100 } }
  }))
}
