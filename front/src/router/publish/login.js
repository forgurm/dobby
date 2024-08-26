const routes = [
  // 로그인
  {
    path: '/publish/login',
    name: 'AST_LOG_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AST_LOG_100" */ '@/publish/login/AST_LOG_100.vue')
  }
]

const router = routes

export default router
