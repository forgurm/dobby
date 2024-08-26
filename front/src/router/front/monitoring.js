const routes = [
  // 모니터링
  {
    path: '/monitoring',
    name: 'monitoring',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "monitoring" */ '@/views/monitoring/monitoring.vue'),
    meta: {
      loginYn: true,
      role: 'fncorg'
    }
  }
]

const router = routes

export default router
