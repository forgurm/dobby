import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import root from '../publish/root.vue'

let publish = []
let front = []
const publishFiles = import.meta.glob('@/router/publish/**/*.js', { eager: true })
const frontFiles = import.meta.glob('@/router/front/**/*.js', { eager: true })

const importFunction = (files, array) => {
  for (const key in files) {
    let customKey = key.replace(/^.*[\\/]/, '').replace(/(\.\/|\.js)/g, '')
    array[customKey] = files[key].default
  }
}

// publish
importFunction(publishFiles, publish)
importFunction(frontFiles, front)

// routes 추가할때는 router/front/내에 js파일명을 동일하게 맞춰야함
const routes = [
  {
    path: '/root',
    name: 'root',
    component: root
  },
  ...front.main,
  ...front.members,
  ...front.botList,
  ...front.account,
  ...front.schedule,
  ...front.education,
  ...front.faQ,
  ...front.qnA,
  ...front.notice,
  ...front.symbolList,
  ...front.promotion,
  ...front.currentSituation,
  ...front.login,
  ...front.mypage,
  ...front.siteManagement,
  ...front.statics
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 로그인을 해야 하는 화면과 아닌 화면을 분류
  if (!to.meta.loginYn) {
    next()
  } else {
    // 새로고침 시, store에 userToken과 refreshToken 하나라도 없을 때 sessionStorage에서 가져오기
    // if (!store.state.service.login.userToken || !store.state.service.login.refreshToken) {
    //   const sessionToken = window.sessionStorage.getItem('token')
    //   const refSessionToken = window.sessionStorage.getItem('refToken')
    //   if (!sessionToken || !refSessionToken) {
    //     next('/')
    //   } else {
    //     store.state.service.login.userToken = window.sessionStorage.getItem('token')
    //     store.state.service.login.refreshToken = window.sessionStorage.getItem('refToken')
    //     store.state.service.login.yn = true
    //   }
    // }
  }
  next()
})

export default router
