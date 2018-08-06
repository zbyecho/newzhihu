import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Home from '@/view/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      // redirect:'/',
      name: 'home',
      component: Home
    }
  ]
})
