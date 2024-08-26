const routes = [
  // 홈 > 메인화면
  {
    path: '/publish/main',
    name: 'AST_MAI_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AST_MAI_100" */ '@/publish/main/AST_MAI_100.vue')
  }
]

const router = routes

export default router
