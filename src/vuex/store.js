import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { firebaseAuth } from '@/firebase/firebaseAuth'
import router from '@/router'

Vue.use(Vuex)

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    console.log('Auth changed:', user)
    state.user = user

    router.push('home')
  } else {
    console.log('Auth revoked!')
    state.user = null

    if (router.history.current.path !== '/landing')
      router.push('landing')
    else 
      console.log('Already on landing page')
  }
})

const state = {
  key: '',
  ddt: '',
  user: null
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
