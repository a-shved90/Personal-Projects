import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import(/* webpackChunkName: "resume" */ "./views/Resume.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./views/Portfolio.vue")
    },
    {
      path: "/skills",
      name: "skills",
      component: () =>
        import(/* webpackChunkName: "skills" */ "./views/Skills.vue")
    },
    {
      path: "/social",
      name: "social",
      component: () =>
        import(/* webpackChunkName: "social" */ "./views/Social.vue")
    },
    {
      path: "/classmates",
      name: "classmates",
      component: () =>
        import(/* webpackChunkName: "classmates" */ "./views/Classmates.vue")
    },
    {
      path: "/*",
      name: "404",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
    }
  ]
});
