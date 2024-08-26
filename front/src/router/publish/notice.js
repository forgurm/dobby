const routes = [
  // 홈 > 공지사항
  {
    path: '/publish/notice',
    name: 'AST_NOT_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_NOT_100" */ '@/publish/notice/AST_NOT_100.vue')
  },
  // 홈 > 공지사항 > 상세
  {
    path: '/publish/notice/detail',
    name: 'AST_NOT_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_NOT_101" */ '@/publish/notice/AST_NOT_101.vue')
  }
]

const router = routes

export default router
