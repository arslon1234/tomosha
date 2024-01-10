export default {
    path: "/",
    name: "auth",
    component: () => import("../layout/AuthLayout.vue"),
    redirect: "/login",
    children: [
        {
            path: "login",
            name: "login",
            component: () => import("../views/auth/Login.vue")
        },
        {
            path: "register",
            name: "register",
            component: () => import("../views/auth/Register.vue")
        }
    ]
}