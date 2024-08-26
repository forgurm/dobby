const routes = [
  // 홈 > 공지사항
  {
    path: '/notice',
    name: 'noticeList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "noticeList" */ '@/views/notice/noticeList.vue'),
    meta: {
      loginYn: true
    }
  },
  // 홈 > 공지사항 > 상세
  {
    path: '/notice/detail',
    name: 'noticeDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "noticeDetail" */ '@/views/notice/noticeDetail.vue'),
    meta: {
      loginYn: true
    }
  }
]

const router = routes

export default router
