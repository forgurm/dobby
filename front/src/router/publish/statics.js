const routes = [
  // 통계
  // 홈 > 통계 > 종합
  {
    path: '/publish/statics/all',
    name: 'AST_STA_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STA_100" */ '@/publish/statics/AST_STA_100.vue')
  },
  // 홈 > 통계 > 발행인별
  {
    path: '/publish/statics/publisher',
    name: 'AST_STA_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STA_101" */ '@/publish/statics/AST_STA_101.vue')
  },
  // 홈 > 통계 > 계좌관리기관별
  {
    path: '/publish/statics/manager',
    name: 'AST_STA_102',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STA_102" */ '@/publish/statics/AST_STA_102.vue')
  }
]

const router = routes

export default router
