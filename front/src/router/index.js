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

const routes = [
  {
    path: '/root',
    name: 'root',
    component: root
  },
  {
    path: '/publish/component',
    name: 'component',
    component: () => import('../publish/component.vue')
  },
  ...front.main,
  ...front.accountManagement,
  ...front.applicationApproval,
  ...front.approvalProcessing,
  ...front.currentSituation,
  ...front.login,
  ...front.monitoring,
  ...front.mypage,
  ...front.notice,
  ...front.siteManagement,
  ...front.statics,
  ...publish.main,
  ...publish.accountManagement,
  ...publish.applicationApproval,
  ...publish.approvalProcessing,
  ...publish.currentSituation,
  ...publish.login,
  ...publish.monitoring,
  ...publish.mypage,
  ...publish.notice,
  ...publish.siteManagement,
  ...publish.statics
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
