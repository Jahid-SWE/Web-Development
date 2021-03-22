import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Details from "@/views/Details";
import Service from "@/views/Service";
import Biography from "@/views/Biography";

Vue.use(VueRouter)
const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/about',
            name:'about',
            component: About
        },
        {
            path: '/contact',
            name:'contact',
            component: Contact
        },
        {
            path: '/home/details',
            name: 'details',
            component: Details
        },
        {
            path: '/service',
            name:'service',
            component: Service
        },
        {
            path: '/biography',
            name: 'biography',
            component: Biography
        }
    ]
})
export default route
