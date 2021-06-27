import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
require('./plugins/fontawesome');
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import moment from 'moment';
import 'vuetify/dist/vuetify.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
Vue.use(VueToast);
new Vue({
  router,
  vuetify,
  moment,
  render: h => h(App),
}).$mount('#app')
