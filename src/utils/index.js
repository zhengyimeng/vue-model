/**
 * 实用工具
 */
export { default as request } from './request'
export { ws } from './ws'

export function setTitle(title) {
  title = String(title).trim()
  if (!title) return
  document.title = title
}
