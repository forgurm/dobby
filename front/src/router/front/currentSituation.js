const routes = [
  // 홈 > 현황
  // 토큰증권 현황
  {
    path: '/currentsituation/securitytoken',
    name: 'currentSituationSecurityTokenList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "currentSituationSecurityTokenList" */ '@/views/currentSituation/securityToken/currentSituationSecurityTokenList.vue'
      ),
    meta: {
      loginYn: true
    }
  },
  // 상세
  {
    path: '/currentsituation/securitytoken/detail',
    name: 'currentSituationSecurityTokenDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "currentSituationSecurityTokenDetail" */ '@/views/currentSituation/securityToken/currentSituationSecurityTokenDetail.vue'
      ),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 현황 > 발행인현황
  // 리스트
  {
    path: '/currentsituation/publisher',
    name: 'currentSituationPublisherList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_STI_200" */ '@/views/currentSituation/publisher/currentSituationPublisherList.vue'
      ),
    meta: {
      loginYn: true
    }
  },
  // 상세
  {
    path: '/currentsituation/publisher/detail',
    name: 'currentSituationPublisherDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "currentSituationPublisherDetail" */ '@/views/currentSituation/publisher/currentSituationPublisherDetail.vue'
      ),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 현황 > 계좌관리기관현황
  // 리스트
  {
    path: '/currentsituation/manager',
    name: 'currentSituationManagerList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "currentSituationManagerList" */ '@/views/currentSituation/manager/currentSituationManagerList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'fncorg'
    }
  },
  // 상세
  {
    path: '/currentsituation/manager/detail',
    name: 'currentSituationManagerDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "currentSituationManagerDetail" */ '@/views/currentSituation/manager/currentSituationManagerDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'fncorg'
    }
  }
]

const router = routes

export default router
