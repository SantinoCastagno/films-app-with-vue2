import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Series from "../views/Series.vue";
import Movies from "../views/Movies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/series",
    name: "Series",
    component: Series,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
