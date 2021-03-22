import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Details from "@/views/Details";

Vue.use(VueRouter)
const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/about',
            name:'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
          path:'/details',
          name: 'details',
          component: Details
        }
    ]
})
export default route