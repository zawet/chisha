import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import chisha from '../views/chisha.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'chisha',
    component: chisha
  }
]

const router = new VueRouter({
  routes
})

export default router
