export default [
  {
    path: "/login",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Login.vue`)
  },
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "Dashboard"
    }
  },
  {
    path: "/dashboard",
    meta: { breadcrumb: true },
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Dashboard.vue`)
  },
  {
    path: "userdata",
    meta: { breadcrumb: true },
    name: "userdata",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Tables.vue`)
  },
  {
    path: "/patientqueue",
    meta: { breadcrumb: true },
    name: "patientqueue",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/patientQueue.vue`)
  },
  {
    path: "/halodogter",
    meta: { breadcrumb: true },
    name: "dogter",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Dogter.vue`)
  }
];
