import Vue from 'vue'
import  VueRouter from 'vue-router'

import Home from "@/view/Home";
import About from "@/view/About";
import Portfolio from "@/view/Portfolio";
 Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/about-us/id',
            name:'about',
            component: About
        },
        {
            path:'/portfolio',
            name:'portfolio',
            component: Portfolio
        },
    ]
})
export default router