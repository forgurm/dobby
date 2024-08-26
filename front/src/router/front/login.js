const routes = [
  // 로그인
  {
    path: '/',
    name: 'loginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "loginPage" */ '@/views/login/loginPage.vue')
  }
]

const router = routes

export default router
