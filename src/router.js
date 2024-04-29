import { createRouter, createWebHistory } from 'vue-router'


import home_page from "./components/home_page/home_page.vue";
import basic_template from "./components/templates/basic/basic_template.vue";
import not_found from './components/not_found/not_found.vue';

const routes = [
    {
        path: '/',
        component: home_page
    },
    {
        path: '/basic_template',
        component: basic_template
    },
    {
        path: '/:catchAll(.*)',
        component: not_found
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
