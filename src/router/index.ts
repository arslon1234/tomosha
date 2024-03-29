import {createRouter, createWebHistory} from "vue-router";
import auth from "./auth"
import not_found from "./not_found.ts";
import genre from './genre.ts';
import main from "./main"

const routes = [auth, not_found, main,genre];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router