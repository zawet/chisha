import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  '@/assets/base.css'
import  'qkycss'
Vue.config.productionTip = false
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
