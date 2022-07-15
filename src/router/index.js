import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VModelDemo from '../components/VModelDemo.vue'
import ComponentData from '../components/ComponentData.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/customize',
    name: '自定义组件',
    component: ()=>import(/* webpackChunkName: "customize" */ '../components/SDirectivePage.vue')
  },
  {
    path: '/vmodel',
    name: '双向绑定',
    component: VModelDemo
  },
  {
    path: '/component-data',
    name: '组件传值',
    component: ComponentData
  },
  {
    path: '/obj-define-property',
    name:'Object defineProperty',
    component: ()=>import('../components/ObjDefineProp.vue')
  },
  {
    path: '/slot',
    name:'插槽',
    component: ()=>import('../components/SlotDemo.vue')
  },
  {
    path: '/listen-attr',
    name:'组件通信',
    component: ()=>import('../components/SCustomInput.vue')
  },
  {
    path: '/renderless',
    name:'组件复用',
    component: ()=>import('../components/SRenderLess.vue')
  },
  {
    path: '/vuex',
    name:'vuex',
    component: ()=>import('../components/Vuex.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
