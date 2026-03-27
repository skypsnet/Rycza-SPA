import { createApp } from "vue";
import VueSplide from '@splidejs/vue-splide';
import App from "./App.vue";
import '@splidejs/vue-splide/css/sea-green';
import './css/app.css';
import './css/fontfaces.css';
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueSplide);
app.mount("#app");
