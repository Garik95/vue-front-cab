// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import './style.scss'
import VueSession from 'vue-session'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/engine.scss'
import Vuebar from 'vuebar'
// const router = () => import('./router')
Vue.use(VueSession)
Vue.use(VueMaterial)
Vue.use(Vuebar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  components: {
    'App': () => import('./App')
  },
  template: '<App/>'
})
