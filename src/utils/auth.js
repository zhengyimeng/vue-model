import Cookie from 'js-cookie'

export const TOKEN_KEY = 'token'

export function getToken() {
  return Cookie.get(TOKEN_KEY)
}

export function setToken(token) {
  Cookie.set(TOKEN_KEY, token)
}

export function removeToken() {
  Cookie.remove(TOKEN_KEY)
}

export function logout() {
  import('@/router').then((router) => {
    removeToken()
    router.default.push('/login')
  })
}
