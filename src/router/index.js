import { createWebHistory, createRouter } from "vue-router"
import Login from '../views/Login.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AdminRoutes from './admin.js'
import PublicRoutes from './public.js'
import { useAuthStore } from '@/stores/auth';
import { trackRouter } from "vue-gtag-next";

const routes = [
  {...PublicRoutes},
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {...AdminRoutes},
  { path: "/:pathMatch(.*)", redirect: '/not-found' },
  { path: "/not-found", component: PageNotFound, name: 'NotFound' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

trackRouter(router); 

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && (!authStore.user || !authStore.token)) {
    next('/login')
  }

  next()
})

export default router