<template>
  <header>
    <nav>
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </nav>
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
    display flex
    align-items center
    justify-content space-between
    padding '0 calc((100vw - %s) / 2)' % $content-width

    nav a
      margin-right 20px
</style>
