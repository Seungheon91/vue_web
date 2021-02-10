import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: '404',
            component: () => import('@/views/exception/404.vue'),
        },
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/Login.vue'),
        },
        {
            path: '/list',
            component: () => import('@/views/board/ListView.vue'),
        },
        {
            path: '/faq',
            component: () => import('@/components/FAQ.vue'),
        },
    ],
});
