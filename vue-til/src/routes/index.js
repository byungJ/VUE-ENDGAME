import Vue from 'vue';
import VueRouter from 'vue-router';
//import LoginPage from '@/views/LoginPage.vue';
//import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // vue router에 의해서 제어되는 페이지 정보를 담는 배열
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
