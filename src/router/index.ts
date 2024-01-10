import {createRouter, createWebHistory} from "vue-router";
import  auth from "./auth"
import not_found from "./not_found.ts";
const routes = [auth, not_found];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router