export default {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: () => import("../views/not_found/NotFound.vue"),
}