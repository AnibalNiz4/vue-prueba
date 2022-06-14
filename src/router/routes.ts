import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: '/' , component: () => import('pages/HomeVue.vue') },
      { path: 'hola', name: 'hola' , component: () => import('pages/HolaMundo.vue') },
      { path: 'otra', name: 'otra' , component: () => import('pages/OtraPagina.vue') },
      { path: 'otra/:country', name: 'country' , component: () => import('pages/CountryData.vue') },
      { path: 'list', name: 'list' , component: () => import('pages/FormList.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
];

export default routes;
