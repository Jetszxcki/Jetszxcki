const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") }
    ],
  },
  {
    path: "/blogs",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/blogs/Index.vue") },
      {
        path: "arts",
        component: () => import("pages/blogs/arts/Index.vue"),
        children: [
          {
            path: "the-art-of-mimicry",
            component: () => import("pages/blogs/arts/TheArtOfMimicry.vue")
          }
        ]
      },
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
