import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Entry from '../views/Entry.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/entry', component: Entry }
]

export default createRouter({
    history: createWebHistory(),
    routes
})