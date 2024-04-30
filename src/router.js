import { createRouter, createWebHistory } from 'vue-router'

import header_page from "./components/header_page/header_page.vue";
import basic_template from "./components/templates/basic/basic_template.vue";
import modern_template from './components/templates/modern/modern_template.vue';
import not_found from './components/not_found/not_found.vue';

const routes = [
    {
        path: '/',
        component: header_page
    },
    {
        path: '/basic_template',
        component: basic_template
    },
    {
        path: '/modern_template',
        component: modern_template
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
