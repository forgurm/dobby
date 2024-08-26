const routes = [
  // 홈 > 토큰증권 신청승인
  // 리스트
  {
    path: '/applicationapproval',
    name: 'applicationapprovalList',
    
    component: () =>
      import(
        /* webpackChunkName: "applicationapprovalList" */ '@/views/applicationApproval/applicationApprovalList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'fncorg'
    }
  },
  // 상세
  {
    path: '/applicationApproval/detail',
    name: 'applicationapprovalDetail',
    component: () =>
      import(
        /* webpackChunkName: "applicationapprovalDetail" */ '@/views/applicationApproval/applicationApprovalDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'fncorg'
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
