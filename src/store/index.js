import { createStore } from 'vuex'
import { SET_USER_INFO, SET_USER_BALANCE, setUserBalance } from './actions'
import { getUserBalance } from '@/api'

const store = createStore({
  state: {
    userinfo: {},
    userBalance: {}
  },
  getters: {
    username(state) {
      return state.userinfo.username
    }
  },
  mutations: {
    [SET_USER_INFO](state, action) {
      console.log(action.payload)
      state.userinfo = action.payload
    },

    [SET_USER_BALANCE](state, action) {
      state.userBalance = action.payload
    }
  },
  actions: {
    /**
     * 保存一些异步方法，比如请求数据
     */
    getUserbalance({ commit }) {
      getUserBalance().then(result => {
        commit(SET_USER_BALANCE, setUserBalance(result.data))
      })
    }
  },
  modules: {}
})

export default store
