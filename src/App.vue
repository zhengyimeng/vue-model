<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent} from 'vue'
import { DOM_TITLE } from '@/assets/js/config'
import { setTitle } from '@/utils'

export default defineComponent({
  setup() {
    setTitle(DOM_TITLE)
  }
})
</script>

<style lang="stylus" scoped>
.test-box
  color $success-color
  $dialog()
</style>
