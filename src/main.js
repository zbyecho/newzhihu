// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import '../src/assets/css/common.css'
// import 'reset-css'

Vue.use(iview)
Vue.config.productionTip = false
import {GET,POST} from './util/http'

Vue.prototype.$get = GET;
// Vue.prototype.axios = axios
// axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
