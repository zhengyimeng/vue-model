<template>
  <section class="login-page">
    <h1 class="caption">Login</h1>
    <div class="input-group">
      <label>
        username:
        <input type="text" name="username" v-model="username">
      </label>
    </div>

    <div class="input-group">
      <label>
        password:
        <input type="password" name="password">
      </label>
    </div>

    <div class="action-container">
      <button @click="login">登录</button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { setToken } from '@/utils/auth'
import router from '@/router'
import { useStore } from 'vuex'
import { SET_USER_INFO, setUserInfo } from '@/store/actions'

export default defineComponent({
  setup() {
    const store = useStore()
    const username = ref('')

    /**
     * * 这里我说一下，如果项目中使用的是 localStorage.setItem 就全部用 localStorage.setItem 而不要有的用 localStorage[key] 有的用 localStorage.setItem
     * * 这看似不值一提，但是却是一个很好的习惯，如果是维护别人的代码，就入乡随俗吧这位同学
     */
    const login = () => {
      setToken('i am token')
      localStorage.setItem('locale', 'zh-CN')
      store.commit(SET_USER_INFO, setUserInfo(username))
      store.dispatch('getUserbalance')
      router.push("/home"); // 一般跳到登录页也会在 search 中保存之前那个页面（比如：/login?redirect=/home），我这里直接跳到 home 页是因为懒惰了
    }

    return {
      username,
      login
    }
  }
})
</script>

<style lang="stylus" scoped>
  .login-page
    margin auto
    width 40vw
    border-radius $big-border-radius
    box-shadow $base-box-shadow
    margin-top 20vh
    padding 4% 10%

    .caption
      margin-bottom 40px
      text-align center

    .input-group:not(:first-of-type)
      margin-top 20px

    .action-container
      margin-top 30px
</style>
