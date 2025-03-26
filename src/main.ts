import 'virtual:uno.css'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import ServicesView from './pages/Services.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/services', component: ServicesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
