import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'

// van-ui
import Vant from 'vant'
import 'vant/lib/index.css'
// iview-ui
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

// baseurl
// import global_ from './Base.vue';

window.router=router;

Vue.use(VueAwesomeSwiper);
// Vue.use(Vuex);
Vue.use(Vant);
Vue.use(iView);
Vue.use(MintUI);

Vue.config.productionTip = false ;

// Vue.prototype.$axios = $axios;
// Vue.prototype.GLOBAL = global_;
// $axios.default.baseURL= global_.BASE_URL;

// import { from } from 'rxjs';

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');

let vm = new Vue({
  el:'#app',
  router,
  store,
  template:'<App/>',
  components: { App  }
});
console.log(vm);
