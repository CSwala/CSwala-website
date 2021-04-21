import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'Home - Cswala',
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/explore/:itemId',
    props: true,
    name: 'DetailPage',
    component: () => import('../views/DetailPage.vue')
  },
  {
    path: '/explore/',
    name: 'ExplorePage',
    component: () => import('../views/ExplorePage.vue')
  },
  {
    path: '/hackfeed/',
    name: 'HackFeed',
    component: () => import('../views/HackFeed.vue')
  },
  {
    path: '/jobhunt/',
    name: 'JobHuntPage',
    component: () => import('../views/JobHuntPage.vue')
  },
  {
    path: '/404/',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
