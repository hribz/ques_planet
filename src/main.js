import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import baseUrl from './api/baseUrl'
//注册element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.use(ElementUI);

Vue.config.productionTip = false

Axios.defaults.baseURL = baseUrl
Axios.defaults.withCredentials = true
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
