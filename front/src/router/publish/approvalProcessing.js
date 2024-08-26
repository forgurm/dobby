const routes = [
  // 홈 > 토큰증권 승인처리
  // 리스트
  {
    path: '/publish/approvalprocessing/list',
    name: 'AST_PRO_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_PRO_100" */ '@/publish/approvalProcessing/AST_PRO_100.vue')
  },
  // 상세
  {
    path: '/publish/approvalprocessing/detail',
    name: 'AST_PRO_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_PRO_101" */ '@/publish/approvalProcessing/AST_PRO_101.vue')
  }
]

const router = routes

export default router
