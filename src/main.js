import { createApp, useAttrs } from 'vue'
import App from './App.vue'
import router from "./router";
import jQuery from 'jquery'
const $ = jQuery;
window.$ = $;
import animated from "animate.css";

// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(animated);
app.use(router).mount("#app");
