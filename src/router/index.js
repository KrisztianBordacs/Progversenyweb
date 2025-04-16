import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Referencia from '../components/Referencia.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Referencia', component: Referencia },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;