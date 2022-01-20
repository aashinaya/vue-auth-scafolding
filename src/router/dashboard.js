import store from "../store";
import DashboardLayout from "@/views/dashboard/index.vue";

const dashboardRouter = {
  path: "/dashboard",
  name: "dashboardLayout",
  component: DashboardLayout,
  meta: { requiresAuth: true },
  redirect: "/dashboard/profile",
  children: [
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/dashboard/Profile.vue"),
    },
    {
      path: "settings",
      name: "Settings",
      component: () => import("@/views/dashboard/Settings.vue"),
    },
    {
      path: "logout",
      name: "Logout",
      // eslint-disable-next-line
      beforeEnter: (_, __, next) => {
        store.dispatch("Auth/logoutUser");
        next("/auth/login");
      },
    },
  ],
};

export default dashboardRouter;
