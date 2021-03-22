import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
Vue.use(VueRouter)
const route= new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ]
})

export default route