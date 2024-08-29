// instance import
import instance from '@/assets/api/commonAxios'

// entities req import
import loginReq from '@/entities/login/loginReq'
import commonCodeReq from '@/entities/commonCode/commonCodeReq'
import mainReq from '@/entities/main/mainReq'

//entities res import
import loginRes from '@/entities/login/loginRes'
import commonCodeRes from '@/entities/commonCode/commonCodeRes'
import mainRes from '@/entities/main/mainRes'
const adminApi = {}

/* 로그인 화면 Api */
adminApi.login = {
  // 로그인 Api
  userLogin: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: '/auth/login',  // Changed to match backend route
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
        url: '/common-code',  // Adjusted to match backend route
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

/* 메인화면 관련 API */
adminApi.main = {
  // Bot List 호출
  botList: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: '/main/botList', // botList 경로 호출
        headers: '',
        reqFormat: mainReq.botList,
        request,
        resFormat: mainRes.botList,
        resolve,
        reject
      });
    });
  },

  // Member List 호출
  memberList: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: '/main/memberList', // memberList 경로 호출
        headers: '',
        reqFormat: mainReq.memberList,
        request,
        resFormat: mainRes.memberList,
        resolve,
        reject
      });
    });
  },

  // Symbol Status 호출
  symbolStatus: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: '/main/symbolStatus', // symbolStatus 경로 호출
        headers: '',
        reqFormat: mainReq.symbolStatus,
        request,
        resFormat: mainRes.symbolStatus,
        resolve,
        reject
      });
    });
  },

  // Symbol List 호출
  symbolList: (request) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: '/main/symbolList', // symbolList 경로 호출
        headers: '',
        reqFormat: mainReq.symbolList,
        request,
        resFormat: mainRes.symbolList,
        resolve,
        reject
      });
    });
  }
};


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
