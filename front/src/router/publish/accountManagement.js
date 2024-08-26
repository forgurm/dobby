const routes = [
  // 홈 > 계정관리
  // 발행인
  {
    path: '/publish/accountmanagement/publisher',
    name: 'AST_IDE_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_100" */ '@/publish/accountManagement/AST_IDE_100.vue')
  },
  // 발행인 등록
  {
    path: '/publish/accountmanagement/publisher/add',
    name: 'AST_IDE_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_101" */ '@/publish/accountManagement/AST_IDE_101.vue')
  },
  // 발행인 상세
  {
    path: '/publish/accountmanagement/publisher/detail',
    name: 'AST_IDE_102',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_102" */ '@/publish/accountManagement/AST_IDE_102.vue')
  },

  // 계좌관리기관
  {
    path: '/publish/accountmanagement/manager',
    name: 'AST_IDE_200',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_200" */ '@/publish/accountManagement/AST_IDE_200.vue')
  },
  // 계좌관리기관 등록
  {
    path: '/publish/accountmanagement/manager/add',
    name: 'AST_IDE_201',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_201" */ '@/publish/accountManagement/AST_IDE_201.vue')
  },
  // 계좌관리기관 상세
  {
    path: '/publish/accountmanagement/manager/detail',
    name: 'AST_IDE_202',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_202" */ '@/publish/accountManagement/AST_IDE_202.vue')
  },
  // 시스템운영자
  {
    path: '/publish/systemmanager/systemmanager',
    name: 'AST_IDE_300',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_300" */ '@/publish/accountManagement/AST_IDE_300.vue')
  },
  // 시스템운영자 등록
  {
    path: '/publish/systemmanager/systemmanager/add',
    name: 'AST_IDE_301',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_301" */ '@/publish/accountManagement/AST_IDE_301.vue')
  },
  // 시스템운영자 등록
  {
    path: '/publish/systemmanager/systemmanager/detail',
    name: 'AST_IDE_303',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_IDE_303" */ '@/publish/accountManagement/AST_IDE_303.vue')
  }
]

const router = routes

export default router
