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


// const readLine = require('readline');
// var stream = require('stream');

// // string to buffer
// var baseText = 'this is a sample text\n(empty lines ...)\n\n\n\nend line:)';
// var buf = new Buffer(baseText);

// // http://stackoverflow.com/questions/16038705/how-to-wrap-a-buffer-as-a-stream2-readable-stream
// var bufferStream = new stream.PassThrough();
// bufferStream.end(buf);

// const rl = readLine.createInterface({
//     input: bufferStream,
// });

// var count = 0;
// rl.on('line', function (line) {
//     console.log('this is ' + (++count) + ' line, content = ' + line);
// });

