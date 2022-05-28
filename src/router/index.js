import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jewelry from "@/views/Jewelry.vue";

const routes = [
  {
    path: "/summary-vue",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/summary-vue/jewelry",
    name: "Jewelry",
    component: Jewelry
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
