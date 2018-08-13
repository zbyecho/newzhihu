import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: (resolve) => require(['@/view/login/login.vue'], resolve)
    },
    {
      path:'/home',
      // redirect:'/',
      name: 'home',
      component: (resolve) => require(['@/view/home/home.vue'], resolve)
    }
  ]
})
