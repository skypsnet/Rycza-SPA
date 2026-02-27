
import { createApp } from "vue";
import VueSplide from '@splidejs/vue-splide';
import App from "./App.vue";
import '@splidejs/vue-splide/css/sea-green';
import router from "./router";
import store from "./store";
createApp(App).use(store).use(router).use( VueSplide ).mount("#app");
