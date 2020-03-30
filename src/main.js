import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from '@/router'
import store from '@/vuex/store'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
