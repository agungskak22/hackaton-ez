function loadViewLayout (view) {
  return () => import(/* webpackChunkName: "viewLayout-[request]" */ `@/views/${view}.vue`)
}
export default [
  {
    path: "/",
    meta: {
      public: true
    },
    name: "Login",
    component: loadViewLayout(`Login`)
  },
  {
    path: "/logout",
    name: "Logout",
    component: loadViewLayout(`Logout`)
  },
  {
    path: "/dashboard",
    meta: { breadcrumb: true, requiresAuth: true },
    name: "Dashboard",
    component: loadViewLayout(`Dashboard`)
  },
  {
    path: "userdata",
    meta: { breadcrumb: true, requiresAuth: true },
    name: "userdata",
    component: loadViewLayout(`ui/Tables`)
  },
  {
    path: "/sempro",
    meta: { breadcrumb: true, requiresAuth: true },
    name: "sempro",
    component: loadViewLayout(`patientQueue`)
  },
  {
    path: "/ujianTesis",
    meta: { breadcrumb: true, requiresAuth: true },
    name: "dogter",
    component: loadViewLayout(`Dokter`)
  },
  {
    path: "/saranDokter",
    meta: { breadcrumb: true, requiresAuth: true },
    name: "saranDokter",
    component: loadViewLayout(`saranDokter`)
  }
];