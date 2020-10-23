import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import("./view/index.vue") ;

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Index },
];
const router = new VueRouter({
    mode:'hash',
    routes
})

export default router
