const routes = [
  // 홈 > 마이페이지
  {
    path: '/mypage',
    name: 'mypage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mypage" */ '@/views/mypage/mypage.vue'),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 마이페이지 > 비밀번호수정
  {
    path: '/mypage/passwdchange',
    name: 'mypagePasswdChange',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypagePasswdChange" */ '@/views/mypage/mypagePasswdChange.vue'),
    meta: {
      loginYn: true
    }
  }
]

const router = routes

export default router
