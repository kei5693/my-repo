import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NumberBaseball from '../views/NumberBaseball.vue'
import ResponseCheck from '../views/ResponseCheck.vue'
import MakeTable from '../views/MakeTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/NumberBaseball',
    name: 'NumberBaseball',
    component: NumberBaseball
  },
  {
    path: '/ResponseCheck',
    name: 'ResponseCheck',
    component: ResponseCheck
  },
  {
    path: '/MakeTable',
    name: 'MakeTable',
    component: MakeTable
  }
]

const router = new VueRouter({
  //mode:"history",
  routes
})

export default router
