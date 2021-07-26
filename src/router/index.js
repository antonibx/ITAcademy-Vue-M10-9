import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: () => import('../views/Fotos.vue')
  },
  {
    path: '/usuaris',
    name: 'Usuaris',
    component: () => import('../views/Usuaris.vue')
  },
  {
    path: '/usuari/:id',
    name: 'Usuari',
    component: () => import('../views/FitxaUsuari.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
