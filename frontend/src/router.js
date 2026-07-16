import { createRouter, createWebHistory } from 'vue-router'

import Words from '../view/Words.vue'
import Snow from '../view/Show.vue'
import New from '../view/New.vue'
import Edit from '../view/Edit.vue'
import Test from '../view/Test.vue'

const routes = [
  {
    path: '/',
    redirect: '/words'
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/words/new',
    name: 'New',
    component: New
  },
  {
    path: '/words/show/:id',
    name: 'Show',
    component: Snow
  },
  {
    path: '/words/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/words/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
    })

export default router

