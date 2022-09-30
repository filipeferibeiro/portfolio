import { createApp } from "vue";
import VueRouter from "vue-router";
import "./styles/style.css";
import "./styles/animations.css";
import App from "./App.vue";
import router from "./pages/routes";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
