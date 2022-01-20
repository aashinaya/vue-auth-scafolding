import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Swal from "sweetalert2";
// import "./assets/style.scss";
// import bootstrap from "bootstrap/scss/bootstrap.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";

import "nprogress/nprogress.css";

Vue.config.productionTip = false;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Swal = Swal;
window.Toast = Toast;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
