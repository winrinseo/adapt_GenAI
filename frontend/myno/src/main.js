import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import LoadScript from "vue-plugin-load-script";
import VueFeather from "vue-feather";

Vue.use(LoadScript);
Vue.use(VueFeather);

//전역 선언
Vue.prototype.$hostname = `${location.host}`;
Vue.prototype.$logoUrl = `http://${location.host}/assets/images/logo/dark-logo.png`;

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
