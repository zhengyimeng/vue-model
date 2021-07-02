<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <!-- footer -->
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
  main
    width $content-width
    margin auto
</style>
