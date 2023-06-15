import { createWebHistory, createRouter } from "vue-router"
import Login from '../views/Login.vue'
import AdminRoutes from './admin.js'
import PublicRoutes from './public.js'
import { useAuthStore } from '@/stores/auth';

const routes = [
  {...PublicRoutes},
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {...AdminRoutes}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && (!authStore.user || !authStore.token)) {
    next('/login')
  }

  next()
})

export default router