import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const navRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/create-product',
    name: 'create-product',
    component: () => import('./views/CreateProduct.vue'),
  },
  {
    path: '/update-product/:id',
    name: 'update-product',
    component: () => import('./views/UpdateProduct.vue'),
  },
]

const router = new Router({
  mode: 'history',
  routes: navRoutes,
})

export default router
