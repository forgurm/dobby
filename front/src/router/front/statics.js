const routes = [
  // 통계
  // 홈 > 통계 > 종합
  {
    path: '/statics/all',
    name: 'staticsAllList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_STA_100" */ '@/views/statics/staticsAllList.vue'),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 통계 > 발행인별
  {
    path: '/statics/publisher',
    name: 'staticsPublisher',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "staticsPublisher" */ '@/views/statics/staticsPublisher.vue'),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 통계 > 계좌관리기관별
  {
    path: '/statics/manager',
    name: 'staticsManager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "staticsManager" */ '@/views/statics/staticsManager.vue'),
    meta: {
      loginYn: true
    }
  }
]

const router = routes

export default router
