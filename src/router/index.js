import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import ClientesPage from '../views/ClientesPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import { isAuthenticated } from '../services/auth';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    const authenticated = isAuthenticated();

    if (!authenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
