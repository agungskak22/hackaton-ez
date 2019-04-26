export default [
  {
    path: "/dashboard",
    meta: {},
    name: "Root",
    redirect: {
      name: "Dashboard"
    }
  },
  {
    path: "/",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(
      `@/views/Login.vue`)
  },
  {
    path: "/dashboard",
    meta: { breadcrumb: true },
    name: "Dashboard",
    component: () =>
      import(
      `@/views/Dashboard.vue`)
  },
  {
    path: "userdata",
    meta: { breadcrumb: true },
    name: "userdata",
    component: () =>
      import(
      `@/views/ui/Tables.vue`)
  },
  {
    path: "/patientqueue",
    meta: { breadcrumb: true },
    name: "patientqueue",
    component: () =>
      import(
      `@/views/patientQueue.vue`)
  },
  {
    path: "/halodogter",
    meta: { breadcrumb: true },
    name: "dogter",
    component: () =>
      import(
      `@/views/Dogter.vue`)
  }
];
