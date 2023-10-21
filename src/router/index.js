import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portfolio1 from '../views/portfolio1.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '../views/Project2.vue'
import Project3 from '../views/Project3.vue'
import Project4 from '../views/Project4.vue'
import Project5 from '../views/Project5.vue'
import Project6 from '../views/Project6.vue'
import Project7 from '../views/Project7.vue'
import Project8 from '../views/Project8.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio1',
    component: portfolio1,
  },
  {
    path: '/Project1',
    component: Project1,
    name: 'Project1'
  },
  {
    path: '/Project2',
    component: Project2,
    name: 'Project2'
  },
  {
    path: '/Project3',
    component: Project3,
    name: 'Project3'
  },
  {
    path: '/Project4',
    component: Project4,
    name: 'Project4'
  },
  {
    path: '/Project5',
    component: Project5,
    name: 'Project5'
  },
  {
    path: '/Project6',
    component: Project6,
    name: 'Project6'
  },
  {
    path: '/Project7',
    component: Project7,
    name: 'Project7'
  },
  {
    path: '/Project8',
    component: Project8,
    name: 'Project8'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
