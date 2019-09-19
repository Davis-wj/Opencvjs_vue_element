import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "views/home/Home"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"",
      redirect: '/home'
    },
    {
      path:"/home",
      component: Home
    },
  ]
})
