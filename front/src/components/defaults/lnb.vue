<template>
  <aside class="lnb" :class="!lnbStatus ? 'close' : ''">
    <main role="lnb">
      <button type="button" class="close" v-if="lnbStatus" @click="lnbYn('close')"></button
      ><!--//lnb close btn-->
      <button type="button" class="open" v-else @click="lnbYn('open')"></button
      ><!--//lnb open btn-->
      <ul class="depth1">
        <li :class="{ current: lnbClick.main }">
          <a href="javascript:void(0);" @click="routerPush('dashBoard')"
            >메인메뉴</a>
        </li>
        <li :class="{ current: lnbClick.approvalprocessingList }">
          <a href="javascript:void(0);" @click="routerPush('members')"
            >회원관리</a>
        </li>
        <li :class="{ current: lnbClick.approvalprocessingList }">
          <a href="javascript:void(0);" @click="routerPush('botList')"
            >봇관리</a>
        </li>
        <li :class="{ current: lnbClick.approvalprocessingList }">
          <a href="javascript:void(0);" @click="routerPush('symbolList')"
            >심볼관리</a>
        </li>
        <li :class="{ current: lnbClick.approvalprocessingList }">
          <a href="javascript:void(0);" @click="routerPush('account')"
            >회계</a>
        </li>
        <li :class="{ current: lnbClick.approvalprocessingList }">
          <a href="javascript:void(0);" @click="routerPush('schedule')"
            >스케쥴관리</a>
        </li>
        <li class="more" :class="{ current: lnbDepth.board }">
          <a href="javascript:void(0);" @click="lnbDepthFunc('board')">게시판</a>
          <ul class="depth2">
            <li v-for="(list, index) in lnbMenu.board" :key="index">
              <a href="javascript:void(0);" @click="routerPush(list.routerName)">{{
                list.korTitle
              }}</a>
            </li>
          </ul>
        </li>
      </ul>

    </main>

    <footer>
      <nav>
        <a href="javascript:void(0);">서비스이용약관</a>
        <a href="javascript:void(0);">매뉴얼</a>
      </nav>
      <p>
        COPYRIGHTS (C) ​2021<br />
        BY SDW.ALL RIGHTS<br />
        RESERVED.
      </p>
    </footer>
  </aside>
</template>

<script setup>
import store from '@/store'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
const props = defineProps({
  lnbStatus: Boolean
})

const lnbDepth = reactive({
  board: false,
  accountManagement: false,
  siteManagement: false
})

const lnbClick = reactive({
  applicationapprovalList: false,
  approvalprocessingList: false,
  monitoring: false,
  staticsAllList: false,
  noticeList: false,
  board: {
    securityTokenList: false,
    publisherList: false,
    managerList: false
  },
  accountManagement: {
    publisherList: false,
    managerList: false,
    systemManagerList: false
  },
  siteManagement: {
    termsList: false,
    noticeList: false,
    historyManagementPublisher: false,
    commonCodeManagementList: false,
    serviceSettingList: false,
    moniFabric: false
  }
})

const lnbDepthFunc = (type) => {
  switch (type) {
    case 'board':
      if (lnbDepth.board) lnbDepth.board = false
      else lnbDepth.board = true
      break
    case 'accountManagement':
      if (lnbDepth.accountManagement) lnbDepth.accountManagement = false
      else lnbDepth.accountManagement = true
      break
    case 'siteManagement':
      if (lnbDepth.siteManagement) lnbDepth.siteManagement = false
      else lnbDepth.siteManagement = true
      break
    default:
      break
  }
}
const lnbClickFunc = (type) => {
  lnbClick.applicationapprovalList = false
  lnbClick.approvalprocessingList = false
  lnbClick.monitoring = false
  lnbClick.staticsAllList = false
  lnbClick.noticeList = false
  lnbClick.board.securityTokenList = false
  lnbClick.board.publisherList = false
  lnbClick.board.managerList = false
  lnbClick.accountManagement.publisherList = false
  lnbClick.accountManagement.managerList = false
  lnbClick.accountManagement.systemManagerList = false
  lnbClick.siteManagement.termsList = false
  lnbClick.siteManagement.noticeList = false
  lnbClick.siteManagement.historyManagementPublisher = false
  lnbClick.siteManagement.commonCodeManagementList = false
  lnbClick.siteManagement.serviceSettingList = false
  lnbClick.siteManagement.moniFabric = false
  switch (type) {
    case 'applicationapprovalList':
      if (lnbClick.applicationapprovalList) lnbClick.applicationapprovalList = false
      else lnbClick.applicationapprovalList = true
      break
    case 'approvalprocessingList':
      if (lnbClick.approvalprocessingList) lnbClick.approvalprocessingList = false
      else lnbClick.approvalprocessingList = true
      break
    case 'monitoring':
      if (lnbClick.monitoring) lnbClick.monitoring = false
      else lnbClick.monitoring = true
      break
    case 'staticsAllList':
      if (lnbClick.staticsAllList) lnbClick.staticsAllList = false
      else lnbClick.staticsAllList = true
      break
    case 'noticeList':
      if (lnbClick.noticeList) lnbClick.noticeList = false
      else lnbClick.noticeList = true
      break
    case 'boardSecurityTokenList':
      if (lnbClick.board.securityTokenList)
        lnbClick.board.securityTokenList = false
      else lnbClick.board.securityTokenList = true
      break
    case 'boardPublisherList':
      if (lnbClick.board.publisherList) lnbClick.board.publisherList = false
      else lnbClick.board.publisherList = true
      break
    case 'boardManagerList':
      if (lnbClick.board.managerList) lnbClick.board.managerList = false
      else lnbClick.board.managerList = true
      break
    case 'accountManagementPublisherList':
      if (lnbClick.accountManagement.publisherList) lnbClick.accountManagement.publisherList = false
      else lnbClick.accountManagement.publisherList = true
      break
    case 'accountManagementManagerList':
      if (lnbClick.accountManagement.managerList) lnbClick.accountManagement.managerList = false
      else lnbClick.accountManagement.managerList = true
      break
    case 'accountManagementSystemManagerList':
      if (lnbClick.accountManagement.systemManagerList)
        lnbClick.accountManagement.systemManagerList = false
      else lnbClick.accountManagement.systemManagerList = true
      break
    case 'siteManagementTermsList':
      if (lnbClick.siteManagement.termsList) lnbClick.siteManagement.termsList = false
      else lnbClick.siteManagement.termsList = true
      break
    case 'siteManagementNoticeList':
      if (lnbClick.siteManagement.noticeList) lnbClick.siteManagement.noticeList = false
      else lnbClick.siteManagement.noticeList = true
      break
    case 'siteManagementHistoryManagementPublisher':
      if (lnbClick.siteManagement.historyManagementPublisher)
        lnbClick.siteManagement.historyManagementPublisher = false
      else lnbClick.siteManagement.historyManagementPublisher = true
      break
    case 'siteManagementCommonCodeManagementList':
      if (lnbClick.siteManagement.commonCodeManagementList)
        lnbClick.siteManagement.commonCodeManagementList = false
      else lnbClick.siteManagement.commonCodeManagementList = true
      break
    case 'siteManagementServiceSettingList':
      if (lnbClick.siteManagement.serviceSettingList)
        lnbClick.siteManagement.serviceSettingList = false
      else lnbClick.siteManagement.serviceSettingList = true
      break
    case 'siteManagementMoniFabric':
      if (lnbClick.siteManagement.moniFabric) lnbClick.siteManagement.moniFabric = false
      else lnbClick.siteManagement.moniFabric = true
      break

    default:
      break
  }
}

const lnbYn = (value) => {
  if (value === 'close') store.commit('service/setCloseLnb')
  else store.commit('service/setOpenLnb')
}
const lnbMenu = {
  board: [
    {
      korTitle: '공지사항',
      routerName: 'noticeList'
    },
    {
      korTitle: 'FAQ',
      routerName: 'faq'
    },
    {
      korTitle: 'QNA',
      routerName: 'qnA'
    },
    {
      korTitle: '교육자료',
      routerName: 'education'
    },
    {
      korTitle: '홍보',
      routerName: 'promotion'
    }
  ],
  siteManagement: [
    {
      korTitle: '약관관리',
      routerName: 'siteManagementTermsList'
    },
    {
      korTitle: '공지관리',
      routerName: 'siteManagementNoticeList'
    },
    {
      korTitle: '접속이력관리',
      routerName: 'siteManagementHistoryManagementPublisher'
    },
    {
      korTitle: '공통코드관리',
      routerName: 'siteManagementCommonCodeManagementList'
    },
    {
      korTitle: '환경설정',
      routerName: 'siteManagementServiceSettingList'
    },
    {
      korTitle: 'fabric',
      routerName: 'siteManagementMoniFabric'
    }
  ]
}

const router = useRouter()
const routerPush = (name) => {
  lnbClickFunc(name)
  router.push({ name })
}
</script>

<style></style>
