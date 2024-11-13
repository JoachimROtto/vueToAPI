import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '../components/Shorten.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/testPage',
      name: 'TestPage',
      component: TestPage,
    },
  ],
});

export default router;
