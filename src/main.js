// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Iview from 'iview'
import Toast from '@/common/toast.vue'
import 'iview/dist/styles/iview.css'
import '@/assets/stylus/iview-reset.less'

Vue.use(Iview);

Vue.component('Toast', Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
