import Vue from 'vue'
import axios from 'axios'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import numeral from 'numeral'
import moment from 'moment'
import '@/assets/css/main.css'

Vue.config.productionTip = false
window.eventBus = new Vue();
window.axios = axios;
window.numeral = numeral;
window.moment = moment;
Vue.component('paginate', Paginate)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

