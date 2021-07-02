<template>
  <i class="vue-model-icon" :class="iconClass" />
</template>

<script>
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
