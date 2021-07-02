/**
 * 实用工具
 */

export function setTitle(title) {
  title = String(title).trim()
  if (!title) return
  document.title = title
}
