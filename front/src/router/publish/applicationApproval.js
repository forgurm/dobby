const routes = [
  // 홈 > 토큰증권 신청승인
  // 리스트
  {
    path: '/publish/applicationapproval',
    name: 'AST_REC_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_REC_100" */ '@/publish/applicationApproval/AST_REC_100.vue')
  },
  // 상세
  {
    path: '/publish/applicationApproval/detail',
    name: 'AST_REC_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_REC_101" */ '@/publish/applicationApproval/AST_REC_101.vue')
  }
]

const router = routes

export default router
