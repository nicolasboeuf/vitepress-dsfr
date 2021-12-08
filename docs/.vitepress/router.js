import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routerHistory = createWebHistory()

const router = createRouter({
history: routerHistory,
routes:[
{
path: '/',
component: Login
},
{
path: '/register',
component: Register
},
]
})

export default router