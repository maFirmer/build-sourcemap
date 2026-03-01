import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Sourcemap from "../views/Sourcemap.vue";
import Preview from "../views/Preview.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/sourcemap", component: Sourcemap },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
