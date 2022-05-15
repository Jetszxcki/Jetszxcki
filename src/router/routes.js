const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") }
    ],
  },
  {
    path: "/coming-soon",
    component: () => import("pages/Soon.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
