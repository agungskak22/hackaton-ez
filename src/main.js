import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";
import axios from 'axios'

Vue.prototype.$http = axios
// Vue.prototype.$apiUrl = 'http://10.50.0.96/';
Vue.prototype.$apiUrl = 'http://127.0.0.1:8000/'

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
