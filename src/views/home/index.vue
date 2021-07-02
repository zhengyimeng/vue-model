<template>
  <div class="home">
    <Icon type="home" />
    i am home
    <p>Wellcom! {{ username }}</p>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const { username } = toRefs(store.getters)
    // 这里用户数据应该要保存在某个刷新但是不会清除的地方，你懂得，我就不写了，这里只是为了教大家用 vuex

    return {
      username
    }
  }
})
</script>

<style>

</style>
