// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import CounterView from '../views/CounterView.vue'
import CalculatorView from '../views/CalculatorView.vue' 

const routes = [
  { path: '/', redirect: '/todo' },
  { path: '/todo', component: TodoView },
  { path: '/counter', component: CounterView },
  { path: '/calculator', component: CalculatorView } ,

]

const router = createRouter({
history: createWebHistory(), // ✅ 你漏掉了這行，這是必要的
  routes
})

export default router
