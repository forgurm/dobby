
const routes = [
    // 홈 > 메인화면
    
    {
      path: '/members',
      name: 'members',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dashBoard" */ '@/views/members/memberList.vue'),
      meta: {
        loginYn: true
      }
    },
  ]
  
  const router = routes
  
  export default router
  