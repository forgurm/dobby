const routes = [
  // 모니터링
  {
    path: '/publish/monitoring',
    name: 'AST_MON_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_MAI_100" */ '@/publish/monitoring/MON_100.vue')
  }
]

const router = routes

export default router
