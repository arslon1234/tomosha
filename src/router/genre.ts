export default {
    path: "/genres/:title",
    name: "genres",
    component: () => import("../views/main/Genres.vue"),
}