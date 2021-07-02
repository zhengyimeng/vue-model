<template>
  <section>
    <div>
      <label>
        username:
        <input type="text" name="username">
      </label>
    </div>

    <div>
      <label>
        password:
        <input type="password" name="password">
      </label>
    </div>

    <div>
      <button @click="login">submit</button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { setToken } from '@/utils/auth'
import router from '@/router'

export default defineComponent({
  setup() {
    const login = () => {
      setToken('i am token')
      localStorage.setItem('locale', 'zh-CN')
      /**
       * * 这里我说一下，如果项目中使用的是 localStorage.setItem 就全部用 localStorage.setItem 而不要有的用 localStorage[key] 有的用 localStorage.setItem
       * * 这看似不值一提，但是却是一个很好的习惯，如果是维护别人的代码，就入乡随俗吧这位同学
       */
      router.push("/home"); // 一般跳到登录也会在 search 中保存之前那个页面，我这里直接跳到 home 页是因为懒惰了
    }

    return {
      login
    }
  }
})
</script>

<style>

</style>
