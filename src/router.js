import Vue from 'vue';
import VueRouter from 'vue-router';
import First from "@/views/FirstPage.vue";
import Second from "@/views/SecondPage.vue";
import HomePage from "@/views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: HomePage
        }
    },
    {
        path: '/first',
        name: 'first',
        components: {
            default: First
        }
    },
    {
        path: '/second',
        name: 'second',
        components: {
            default: Second
        }
    }
];

export const router = new VueRouter({
    routes: routes,
    mode: 'history'
});