import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'work',
        name: 'work',
        component: () => import('pages/WorkPage.vue'),
      },
      {
        path: 'prices',
        name: 'prices',
        component: () => import('pages/PricesPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
