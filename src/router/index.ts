import {createRouter, createWebHistory} from "vue-router";
import auth from "./auth";
import not_found from "./not_found.ts";

import main from "./main";
import test from "./test";

const routes = [auth, not_found, main, test];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;