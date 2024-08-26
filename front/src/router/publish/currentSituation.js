const routes = [
  // 홈 > 현황
  // 토큰증권 현황
  {
    path: '/publish/currentsituation/securitytoken',
    name: 'AST_STI_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_100" */ '@/publish/currentSituation/AST_STI_100.vue')
  },
  // 상세
  {
    path: '/publish/currentsituation/securitytoken/detail',
    name: 'AST_STI_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_101" */ '@/publish/currentSituation/AST_STI_101.vue')
  },
  // 홈 > 현황 > 발행인현황
  // 리스트
  {
    path: '/publish/currentsituation/publisher',
    name: 'AST_STI_200',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_200" */ '@/publish/currentSituation/AST_STI_200.vue')
  },
  // 상세
  {
    path: '/publish/currentsituation/publisher/detail',
    name: 'AST_STI_102',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_201" */ '@/publish/currentSituation/AST_STI_102.vue')
  },
  // 홈 > 현황 > 계좌관리기관현황
  // 리스트
  {
    path: '/publish/currentsituation/manager',
    name: 'AST_STI_300',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_300" */ '@/publish/currentSituation/AST_STI_300.vue')
  },
  // 상세
  {
    path: '/publish/currentsituation/manager/detail',
    name: 'AST_STI_103',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STI_301" */ '@/publish/currentSituation/AST_STI_103.vue')
  }
]

const router = routes

export default router
