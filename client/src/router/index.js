import { createRouter, createWebHashHistory } from "vue-router";
import StateList from "@/components/StateList.vue";
import AboutSite from "@/components/AboutSite.vue";
import StateMap from "@/components/StateMap.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // this will associate the homepage (at location /) with the StateList component
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            // this will associate the page at /about with the AboutSite component
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        }
    ]
})