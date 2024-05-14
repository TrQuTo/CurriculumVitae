import { createRouter, createWebHistory } from 'vue-router'

import basic_template from "@/components/templates/basic/basic_template.vue";
import modern_template from '@/components/templates/modern/modern_template.vue';
import home_page from '@/components/home_page/home_page.vue';
import templates_page from '@/components/templates_page/templates_page.vue';
import jobs_page from '@/components/jobs_page/jobs_page.vue';
import companies_page from '@/components/companies_page/companies_page.vue';
import not_found from '@/components/not_found/not_found.vue';

const routes = [
    {
        path: '/',
        component: home_page
    },
    {
        path: '/home',
        component: home_page
    },
    {
        path: '/templates',
        component: templates_page
    },
    {
        path: '/jobs',
        component: jobs_page
    },
    {
        path: '/companies',
        component: companies_page
    },
    {
        path: '/templates/basic_template',
        component: basic_template
    },
    {
        path: '/templates/modern_template',
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
