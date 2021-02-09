import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTutorial from '@/components/AddTutorial.vue'
import Tutorial from '@/components/Tutorial.vue'
import TutorialList from '@/components/TutorialList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: TutorialList
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: Tutorial
  },
  {
    path: '/add',
    name: 'add-tutorial',
    component: AddTutorial
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
