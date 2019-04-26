import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from '../store.js';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: paths,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }})
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    next({ name: 'Login' })
    return
  }
  // if logged in redirect to dashboard
  if (to.name === 'Login' && store.state.isLoggedIn) {
    next({ name: 'Dashboard' })
    return
  }
  // if logged in redirect to dashboard
  if (to.name === 'Dashboard' && !store.state.isLoggedIn) {
    next({ name: 'Login' })
    return
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
