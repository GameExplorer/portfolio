import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Desktop',
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
    },
    {
        path: '/system_information', 
        name: 'SystemInformation',
    },
    {
        path: '/credits',
        name: 'Credits',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;