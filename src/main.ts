import { createApp } from "vue";
import VueRouter from "vue-router";
import "./style.css";
import App from "./App.vue";
import router from "./pages/routes";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
