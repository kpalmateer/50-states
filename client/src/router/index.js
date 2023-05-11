import { createRouter, createWebHashHistory } from "vue-router";
import StateList from "@/components/StateList.vue";
import AboutSite from "@/components/AboutSite.vue";
import StateMap from "@/components/StateMap.vue";
import NotFound from "@/components/NotFound.vue";
import StatesVisited from "@/components/StatesVisited.vue";

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
        },
        {
            // create a regex for any potential URL input
            // the . means any character, the * means any number of times
            // and the outer star includes repeating characters
            path: '/:pathMatch(.*)*',  // match anything that's not one of the other routes
            name: 'NotFound',
            component: NotFound
        },
        {
            // create a router for the StatesVisited component
            path: '/states/visited',
            name: 'StatesVisited',
            component: StatesVisited
        }
    ]
})