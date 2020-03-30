import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Landing from '@/views/Landing.vue'
import Restoring from '@/views/Restoring.vue'
import Login from '@/views/Login'
import store from '@/vuex/store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getUser) return next()
  next('/restoring')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'restoring',
      component: Restoring
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth()
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
