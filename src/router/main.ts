export default {
    path: "/",
    name: "main",
    component: () => import("@/layout/MainLayout.vue"),
    redirect: "/main",
    children: [
        {
            path: "/main",
            component: () => import("@/views/main/Main.vue")
        }
    ]
}