import Vue from "vue";
import App from "./App.vue";
import store from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import LoadScript from "vue-plugin-load-script";
import VueFeather from "vue-feather";

Vue.use(LoadScript);
Vue.use(VueFeather);

//전역 선언
Vue.prototype.$hostname = `${location.host}`;
Vue.prototype.$logoUrl = `http://${location.host}/assets/images/logo/adapt.png`;

Vue.config.productionTip = false;
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
