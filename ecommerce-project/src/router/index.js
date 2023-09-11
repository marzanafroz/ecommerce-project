import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactView from '../views/ContactView.vue';
import DetailView from '../views/DetailView.vue';
import CartView from '../views/CartView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/products',
      name:'products',
      component: ProductsView
    },
    {
      path:'/details/:id',
      component:DetailView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path:'/cart',
      name: 'cart',
      component: CartView

    },


  ]
})

export default router
