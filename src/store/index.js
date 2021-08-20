import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
  },
  mutations: {
    USER_LOGIN(state, value){
      state.hasLogin = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
