import Router from '@easyroute/core';
import hashMode from '@easyroute/core/hash-mode';
import {EasyrouteProvider, RouterOutlet} from '@easyroute/svelte';
import Dashboard from './components/Dashboard.svelte';
import Posts from './components/Posts.svelte';

const router = new Router({
    mode: hashMode,
    routes: [
        {
            path: "/",
            component: Dashboard,
            name: "Dashboard",

        },
        {
            path: "/user/:id",
            component: Posts,
            name: "Posts"
        }
    ]
});


export default router;