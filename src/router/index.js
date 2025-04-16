import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Referencia from '../components/Referencia.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/referencia', component: Referencia },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;