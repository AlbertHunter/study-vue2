import Vue from "vue";
import SelfRouter from './selfRouter.js' //自定义router
import Home from '../../views/Home.vue'

Vue.use(SelfRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../../views/About.vue')
        }
    }
]

const router = new SelfRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
