<template>
  <i class="vue-model-icon" :class="iconClass" />
</template>

<script>
/**
 * icon font 如何实现的呢？
 * 访问 https://www.iconfont.cn/ 资源管理 => 我的项目 => 新建项目 => Font class => 查看在线连接 => 连接放在项目的 public/index.html 里
 * 我的 font-family 设置的是 vue-model-icon, 因为 iconfont 一般会和其他字体图标冲突，所以我建议大家 新建项目 的时候吧 Font Family 改掉
 */
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    type: String
  },
  setup(props) {
    const iconClass = computed(() => `icon-${props.type}`)

    return {
      iconClass
    }
  }
})
</script>

<style lang="stylus" scoped>
  .icon
    font-size inherit
    font-style normal
    color inherit
</style>
