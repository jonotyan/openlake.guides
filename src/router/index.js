import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import TestComponent from "@/components/TestComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
