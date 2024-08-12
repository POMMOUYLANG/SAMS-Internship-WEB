import type { RouteRecordRaw } from "vue-router";

// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    // redirect: () => ({ name: "apps-dashboard-dashboard-admin" }),
    redirect: () => ({ name: "auth-login-page" }),
  },
];

export const routes: RouteRecordRaw[] = [];
