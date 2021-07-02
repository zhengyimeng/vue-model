<template>
  <header>
    <button @click="logout">logout</button>
  </header>
</template>

<script>
import { logout } from '@/utils/auth'

export default {
  name: 'Header',
  setup() {
    return {
      logout
    }
  }
}
</script>

<style lang="stylus" scoped>
  header
    height 44px
    line-height @height
    border-bottom thin solid
</style>
