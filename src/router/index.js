import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fotos',
    name: 'Galeria',
    component: () => import('../views/Galeria.vue')
  },
  {
    path: '/album/:num',
    name: 'Album',
    component: () => import('../views/Album.vue')
  },
  {
    path: '/album/:num/foto/:id',
    name: 'Foto',
    component: () => import('../views/FitxaFoto.vue')
  },
  {
    path: '/usuaris',
    name: 'Usuaris',
    component: () => import('../views/Usuaris.vue')
  },
  {
    path: '/usuari/:id',
    name: 'Usuari',
    component: () => import('../views/FitxaUsuari.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;