import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
