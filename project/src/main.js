import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
