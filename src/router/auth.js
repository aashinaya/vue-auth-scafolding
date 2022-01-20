import AuthLayout from "@/views/auth/index.vue";

const authRouter = {
  path: "/auth",
  name: "authLayout",
  component: AuthLayout,
  redirect: "/auth/login",
  meta: { requiresGuest: true },
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "register",
      name: "Register",
      component: () => import("@/views/auth/Register.vue"),
    },
  ],
};

export default authRouter;
