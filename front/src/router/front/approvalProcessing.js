const routes = [
  // 홈 > 토큰증권 승인처리
  // 리스트
  {
    path: '/approvalprocessing/list',
    name: 'approvalprocessingList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "approvalprocessingList" */ '@/views/approvalProcessing/approvalProcessingList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 상세
  {
    path: '/approvalprocessing/detail',
    name: 'approvalProcessingDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "approvalprocessingDetail" */ '@/views/approvalProcessing/approvalProcessingDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 발행인 현황 상세
  {
    path: '/currentSituationPublisher/Detail',
    name: 'currentSituationPublisherDetail',
    component: () =>
      import(
        /* webpackChunkName: "currentSituationPublisherDetail" */ '@/views/currentSituation/manager/currentSituationManagerDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'fncorg'
    }
  }
]

const router = routes

export default router
