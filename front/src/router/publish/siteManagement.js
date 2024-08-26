const routes = [
  // 사이트 관리
  // 홈 > 사이트 관리 > 약관 관리
  {
    path: '/publish/sitemanagement/terms',
    name: 'AST_SIT_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_100" */ '@/publish/siteManagment/terms/AST_STI_100.vue')
  },
  // 상세
  {
    path: '/publish/sitemanagement/terms/detail',
    name: 'AST_SIT_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_101" */ '@/publish/siteManagment/terms/AST_STI_101.vue')
  },
  // 등록
  {
    path: '/publish/sitemanagement/terms/add',
    name: 'AST_SIT_102',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_102" */ '@/publish/siteManagment/terms/AST_STI_102.vue')
  },

  // 공지 관리
  {
    path: '/publish/sitemanagement/notice',
    name: 'AST_SIT_200',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_200" */ '@/publish/siteManagment/notice/AST_SIT_200.vue')
  },
  // 상세
  {
    path: '/publish/sitemanagement/notice/detail',
    name: 'AST_SIT_201',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_201" */ '@/publish/siteManagment/notice/AST_STI_201.vue')
  },
  // 등록
  {
    path: '/publish/sitemanagement/notice/add',
    name: 'AST_SIT_202',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_202" */ '@/publish/siteManagment/notice/AST_SIT_202.vue')
  },

  // 접속 이력 관리
  // 발행인
  {
    path: '/publish/sitemanagement/historyManagementpublisher',
    name: 'AST_SIT_300',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_300" */ '@/publish/siteManagment/historyManagementPublisher/AST_SIT_300.vue'
      )
  },
  // 계좌관리기관
  {
    path: '/publish/sitemanagement/historyManagementmanager',
    name: 'AST_SIT_301',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_301" */ '@/publish/siteManagment/historyManagementManager/AST_SIT_301.vue'
      )
  },

  // 공통 코드 관리
  // 리스트
  {
    path: '/publish/sitemanagement/commoncodemanagement',
    name: 'AST_SIT_400',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_400" */ '@/publish/siteManagment/commonCodeManagement/AST_SIT_400.vue'
      )
  },
  // 등록
  {
    path: '/publish/sitemanagement/commoncodemanagement/add',
    name: 'AST_SIT_401',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_401" */ '@/publish/siteManagment/commonCodeManagement/AST_SIT_401.vue'
      )
  },
  // 상세
  {
    path: '/publish/sitemanagement/commoncodemanagement/detail',
    name: 'AST_SIT_402',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_402" */ '@/publish/siteManagment/commonCodeManagement/AST_SIT_402.vue'
      )
  },
  // 환경설정
  // 서비스 환경 설정
  {
    path: '/publish/sitemanagement/servicesetting',
    name: 'AST_SIT_500',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AST_SIT_500" */ '@/publish/siteManagment/serviceSetting/AST_SIT_500.vue'
      )
  },
  // Fabric
  {
    path: '/publish/sitemanagement/moniFabric',
    name: 'AST_SIT_600',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_SIT_600" */ '@/publish/siteManagment/fabric/AST_SIT_600.vue')
  }
]

const router = routes

export default router
