const routes = [
  // 홈 > 계정관리
  // 발행인
  {
    path: '/accountmanagement/publisher',
    name: 'accountManagementPublisherList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementPublisherList" */ '@/views/accountManagement/publisher/accountManagementPublisherList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 발행인 등록
  {
    path: '/accountmanagement/publisher/add',
    name: 'accountManagementPublisherAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementPublisherAdd" */ '@/views/accountManagement/publisher/accountManagementPublisherAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 발행인 상세
  {
    path: '/accountmanagement/publisher/detail',
    name: 'accountManagementPublisherDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementPublisherDetail" */ '@/views/accountManagement/publisher/accountManagementPublisherDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 계좌관리기관
  {
    path: '/accountmanagement/manager',
    name: 'accountManagementManagerList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementManagerList" */ '@/views/accountManagement/manager/accountManagementManagerList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 계좌관리기관 등록
  {
    path: '/accountmanagement/manager/add',
    name: 'accountManagementManagerAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementManagerAdd" */ '@/views/accountManagement/manager/accountManagementManagerAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },

  // 계좌관리기관 상세

  {
    path: '/accountmanagement/manager/detail',
    name: 'accountManagementManagerDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementManagerDetail" */ '@/views/accountManagement/manager/accountManagementManagerDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 시스템운영자
  {
    path: '/accountmanagement/systemmanager',
    name: 'accountManagementSystemManagerList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementSystemManagerList" */ '@/views/accountManagement/systemManager/accountManagementSystemManagerList.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 시스템운영자 등록
  {
    path: '/accountmanagement/systemmanager/add',
    name: 'accountManagementSystemManagerAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementSystemManagerAdd" */ '@/views/accountManagement/systemManager/accountManagementSystemManagerAdd.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  },
  // 시스템운영자 등록
  {
    path: '/accountmanagement/systemmanager/detail',
    name: 'accountManagementSystemManagerDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "accountManagementSystemManagerDetail" */ '@/views/accountManagement/systemManager/accountManagementSystemManagerDetail.vue'
      ),
    meta: {
      loginYn: true,
      role: 'platform'
    }
  }
]

const router = routes

export default router
