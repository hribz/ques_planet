import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo: {
      email: "",
      username: "",
      password: "",
      avatar: "0"
    },

  },
  mutations: {
    USER_LOGIN(state, value){
      state.hasLogin = true;
      state.userInfo = value;
    },
  },
  actions: {
  },
  getters: {
    userInfo: state => state.userInfo
  },
  modules: {
  }
})
