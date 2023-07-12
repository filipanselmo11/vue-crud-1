// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/primero_acesso',
        name: 'PrimeiroAcesso',
        component: () => import('@/views/PrimeiroAcesso.vue')
      },
      {
        path: '/esqueci_minha_senha',
        name: 'EsqueciMinhaSenha',
        component: () => import('@/views/EsqueciMinhaSenha.vue')
      },
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
