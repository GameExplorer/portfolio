import { createWebHistory, createRouter } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Desktop',
        component: () => import('../view/DesktopView.vue'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../view/PortfolioView.vue'),
    },
    {
        path: '/system_information',
        name: 'SystemInformation',
        component: () => import('../view/SystemInformationView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;