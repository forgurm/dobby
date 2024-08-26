const routes = [
  // 홈 > 마이페이지
  {
    path: '/publish/mypage',
    name: 'AST_MYP_100',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_MYP_100" */ '@/publish/mypage/AST_MYP_100.vue')
  },
  // 홈 > 마이페이지 > 비밀번호수정
  {
    path: '/publish/mypage/passwdchange',
    name: 'AST_MYP_101',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AST_MYP_101" */ '@/publish/mypage/AST_MYP_101.vue')
  }
]

const router = routes

export default router
