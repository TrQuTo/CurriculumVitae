import { createRouter, createWebHistory } from 'vue-router'

import basic_template from "@/components/templates/basic/basic_template.vue";
import modern_template from '@/components/templates/modern/modern_template.vue';
import main_content from '@/components/main_content_page/main_content.vue';
import not_found from '@/components/not_found/not_found.vue';

const routes = [
    {
        path: '/',
        component: main_content
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
