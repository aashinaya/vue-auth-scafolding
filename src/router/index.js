import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import store from "../store";
import authRouter from "./auth";
import dashboardRouter from "./dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/posts/index.vue"),
  },
  {
    name: "EditPost",
    path: "/edit-post/:id",
    beforeEnter: async (to, _, next) => {
      console.log("TO", to);
      await store.dispatch("Post/getPost", to.params.id);
      next();
    },
    component: () => import("../views/posts/EditPost.vue"),
  },
  authRouter,
  dashboardRouter,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["Auth/isLoggedIn"]) {
      // Redirect to the Login Page
      next("/auth/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters["Auth/isLoggedIn"]) {
      // Redirect to the Login Page
      next("/dashboard/profile");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
