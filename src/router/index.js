// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const Shop = () => import('views/shop/shop.vue')
const Profile = () => import('views/profile/profile.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/category',
      component: Category
    }
  ],
  mode: 'history'
})

export default router