// 用import引入需要用的包
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import vueInfiniteScroll from 'vue-infinite-scroll';

// 用Vue.use添加使用
const FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.prototype.$http = axios;
Vue.use(vueInfiniteScroll);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
