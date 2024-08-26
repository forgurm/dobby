const routes = [
  // 사이트 관리
  // 홈 > 사이트 관리 > 약관 관리
  {
    path: '/sitemanagement/term',
    name: 'siteManagementTermsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementTermsList" */ '@/views/siteManagment/terms/siteManagementTermsList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 상세
  {
    path: '/sitemanagement/term/detail',
    name: 'siteManagementTermDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementTermDetail" */ '@/views/siteManagment/terms/siteManagementTermDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 등록
  {
    path: '/sitemanagement/term/add',
    name: 'siteManagementTermAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementTermAdd" */ '@/views/siteManagment/terms/siteManagementTermAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 공지 관리
  {
    path: '/sitemanagement/notice',
    name: 'siteManagementNoticeList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementNoticeList" */ '@/views/siteManagment/notice/siteManagementNoticeList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 상세
  {
    path: '/sitemanagement/notice/detail',
    name: 'siteManagementNoticeDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementNoticeDetail" */ '@/views/siteManagment/notice/siteManagementNoticeDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 등록
  {
    path: '/sitemanagement/notice/add',
    name: 'siteManagementNoticeAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementNoticeAdd" */ '@/views/siteManagment/notice/siteManagementNoticeAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 접속 이력 관리
  // 발행인
  {
    path: '/sitemanagement/historyManagementpublisher',
    name: 'siteManagementHistoryManagementPublisher',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementHistoryManagementPublisher" */ '@/views/siteManagment/historyManagementPublisher/siteManagementHistoryManagementPublisher.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 계좌관리기관
  {
    path: '/sitemanagement/historyManagementmanager',
    name: 'siteManagementHistoryManagementManager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "sitemanagementHistoryManagementManager" */ '@/views/siteManagment/historyManagementManager/sitemanagementHistoryManagementManager.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 공통 코드 관리
  // 리스트
  {
    path: '/sitemanagement/commoncodemanagement',
    name: 'siteManagementCommonCodeManagementList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementCommonCodeManagementList" */ '@/views/siteManagment/commonCodeManagement/siteManagementCommonCodeManagementList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 등록
  {
    path: '/sitemanagement/commoncodemanagement/add',
    name: 'siteManagementCommonCodeManagementAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementCommonCodeManagementAdd" */ '@/views/siteManagment/commonCodeManagement/siteManagementCommonCodeManagementAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 상세
  {
    path: '/sitemanagement/commoncodemanagement/detail',
    name: 'siteManagementCommonCodeManagementDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementCommonCodeManagementDetail" */ '@/views/siteManagment/commonCodeManagement/siteManagementCommonCodeManagementDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 환경설정
  // 서비스 환경 설정
  {
    path: '/sitemanagement/servicesetting',
    name: 'siteManagementServiceSettingList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementServiceSettingList" */ '@/views/siteManagment/serviceSetting/siteManagementServiceSettingList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'system'
    }
  },
  // Fabric
  {
    path: '/sitemanagement/moniFabric',
    name: 'siteManagementMoniFabric',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "siteManagementMoniFabric" */ '@/views/siteManagment/fabric/siteManagementMoniFabric.vue'
      ),
    meta: {
      loginYn: true,
      role: 'system'
    }
  }
]

const router = routes

export default router
