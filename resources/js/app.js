import "./bootstrap";

import { createApp } from "vue";
import * as VueRouter from "vue-router";

import VueApp from "./components/VueApp.vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";

const routes = [
    { path: "/page1", component: Page1, name: "page1" },
    { path: "/page2", component: Page2, name: "page2" },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = createApp({});
app.component("vue-app", VueApp);
app.use(router);
app.mount("#app");
