import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Sourcemap from "../views/Sourcemap.vue";
import RrwebRecord from "../components/RrwebRecord.vue";
import RrwebPlayer from "../components/RrwebPlayer.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/sourcemap", component: Sourcemap },
  { path: "/rrwebRecord", component: RrwebRecord },
  { path: "/rrwebPlayer", component: RrwebPlayer },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
