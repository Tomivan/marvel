import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home")
    },
    {
      name: "characters",
      path: "/characters",
      component: () => import("@/pages/characters")
    },
    {
      name: "comics",
      path: "/comics",
      component: () => import("@/pages/comics")
    },
    {
      name: "creators",
      path: "/creators",
      component: () => import("@/pages/creators")
    },
    {
        name: "events",
        path: "/events",
        component: () => import("@/pages/events")
    },
    {
        name: "series",
        path: "/series",
        component: () => import("@/pages/series")
    },
    {
        name: "stories",
        path: "/stories",
        component: () => import("@/pages/stories")
    },
]
});