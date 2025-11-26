import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    // { path: '/:pathMatch(.*)*',name:'NotFound', component: () => import('./views/NotFoundView.vue')},
    { path: '/', component: () => import('./views/AuthView.vue') },
    { path: '/main', name: 'main', component: () => import('./views/MainView.vue') },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('./views/StatisticsView.vue'),
    },
  ],
  history: createWebHistory(),
})
