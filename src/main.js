// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-shim'
import 'core-js/fn/promise'
import 'core-js/fn/object/assign'
import Vue from 'vue'
import App from './App'
import router from './router'

require('es6-promise').polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
