// instance import
import instance from '@/assets/api/commonAxios'

// entities req import
import loginReq from '@/entities/login/loginReq'
import commonCodeReq from '@/entities/commonCode/commonCodeReq'
import mainReq from '@/entities/main/mainReq'
import approvalProcessingReq from '@/entities/approvalProcessing/approvalProcessingReq'

//entities res import
import loginRes from '@/entities/login/loginRes'
import commonCodeRes from '@/entities/commonCode/commonCodeRes'
import mainRes from '@/entities/main/mainRes'
import approvalProcessingRes from '@/entities/approvalProcessing/approvalProcessingRes'
const adminApi = {}

/* 로그인 화면 Api */
adminApi.login = {
  // 로그인 Api
  userLogin: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/api/auth/login',  // Changed to match backend route
        headers: '',
        reqFormat: loginReq.userLogin,
        request,
        resFormat: loginRes.userLogin,
        resolve,
        reject
      })
    })
  }
}
/* 공통코드 API */
adminApi.commonCode = {
  siteAmnComnC: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/api/common-code',  // Adjusted to match backend route
        headers: '',
        reqFormat: commonCodeReq.stieAmnComnC,
        request,
        resFormat: commonCodeRes.stieAmnComnC,
        resolve,
        reject
      })
    })
  }
}

////////////////////////////////////

/**
 * 메인화면 호출
 * */
adminApi.applicationApproval = {
  mainDashboard: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: '/api/dashBoard',
        headers: '',
        reqFormat: MainReq.getApplicationApprovalList,
        request,
        resFormat: MainRes.getApplicationApprovalList,
        resolve,
        reject
      })
    })
  },

  main: (request) => {
    return new Promise((resolve, reject) => {
      //console.log('appAppRq:', request); // 로그 추가
      instance({
        method: 'post',
        url: '/main/dashboard',
        headers: '',
        reqFormat: MainReq.getDashboardPage,
        request,
        resFormat: MainRes.getDashBoardPage,
        resolve,
        reject
      })
    })
  },
  
  /* 4. 요청 거절 Api */
  appAppRej: (request) => {
    return new Promise((resolve, reject) => {
      //console.log('appAppRej:', request); // 로그 추가
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/rq-apv/rej',
        headers: '',
        reqFormat: applicationApprovalReq.getApplicationApprovalDetailPageRej,
        request,
        resFormat: applicationApprovalRes.getApplicationApprovalDetailPageRej,
        resolve,
        reject
      })
    })
  }
}

////////////////////////////////////

/**
 * 메인화면 호출
* */
adminApi.approvalProcessing = {
  /* 1. 목록조회 Api */
  rqApvList: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/apv-prc/rqr-list',
        headers: '',
        reqFormat: approvalProcessingReq.getApprovalProcessingList,
        request,
        resFormat: approvalProcessingRes.getApprovalProcessingList,
        resolve,
        reject
      })
    })
  },

  /* 1. 상세조회 Api */
  rqApvDetail: (request) => {
    // 함수 호출 로그 찍기
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/apv-prc/rqr-dtl',
        headers: '',
        reqFormat: approvalProcessingReq.getApprovalProcessingDetailPage,
        request,
        resFormat: approvalProcessingRes.getApprovalProcessingDetailPage,
        resolve,
        reject
      })
    });
  },

  /* 3. 요청처리 Api */
  rqApvDetailrq: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/apv-prc/rqr-prc',
        headers: '',
        reqFormat: approvalProcessingReq.getApprovalProcessingReqPrc,
        request,
        resFormat: approvalProcessingRes.getApprovalProcessingReqPrc,
        resolve,
        reject
      })
    })
  },

  /* 4. 발행취소 Api */
  rqApvDetailrej: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/apv-prc/pbc-can',
        headers: '',
        reqFormat: approvalProcessingReq.getApprovalProcessingReqCan,
        request,
        resFormat: approvalProcessingRes.getApprovalProcessingReqCan,
        resolve,
        reject
      })
    })
  }
}

////////////////////////////////////

/* 토큰증권현황 api */
adminApi.securityToken = {
  psttList: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/amnpotl/tokenscts/tokenscts/pstt/list',
        headers: '',
        reqFormat: {}, // entities> request 만들어서 적용
        request,
        resFormat: {}, // entities> response 만들어서 적용
        resolve,
        reject
      })
    })
  }
}

/* 발행인 현황 Api */

/* 계좌관리기관 현황 Api */

/* 통계 Api */

/* 마이페이지 Api */

/* 공지사항 Api */

/* 콘텐츠관리 Api */

/* 사이트관리 Api */

/* 서비스 환경설정 Api */

/* 계정관리 Api */

export default adminApi
