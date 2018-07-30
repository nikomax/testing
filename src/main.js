// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

Vue.prototype.rentTranslations = rent_translations
Vue.prototype.rentTimer = rent_timer

/* eslint-disable no-new */
new Vue({
  el: '#rent',
  // router,
  components: { App },
  template: '<App/>'
})

export const update = new Vue()
