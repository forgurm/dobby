
const routes = [
    // 홈 > 메인화면
    
    {
      path: '/botList',
      name: 'botList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dashBoard" */ '@/views/bot/botList.vue'),
      meta: {
        loginYn: true
      }
    },
  ]
  
  const router = routes
  
  export default router
  