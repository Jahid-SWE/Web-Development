import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";

Vue.use(VueRouter)
const route =new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/',
            name: 'home',
            component:Contact,
        },
    ]

})
export default route