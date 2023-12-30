import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetailView',
    component: () => import('../views/ProductDetailView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
