import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import ProductDetails from '../components/ProductDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/products', component: ProductList },
    { path: '/products/:id', component: ProductDetails },
    { path: '/', redirect: '/products' }
  ]
})

export default router
