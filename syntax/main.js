import Vue from 'vue'
import App from '../day_17/src/App.vue'
import Router from '../day_17/src/router'

Vue.config.productionTip = false
window.$ = window.jQuery = require('jquery')
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
