<template>
  <div>
    <router-link to="/publish/component">컴포넌트파일</router-link>
    <br />
    <router-link to="/publish/login">AST_LOG_100 로그인</router-link>
    <br />
    <br />
    <router-link to="/publish/main">AST_MAI_100 홈 > 메인화면</router-link>
    <br />
    <br />
    <router-link to="/publish/mypage">AST_MYP_101 홈 > 마이페이지</router-link>
    <br />
    <br />
    <router-link to="/publish/mypage/passwdchange"
      >STO_MYP_101 마이페이지 > 비밀번호변경</router-link
    >
    <br />
    <br />
    <router-link to="/publish/notice">AST_NOT_100 홈 > 공지사항</router-link>
    <br />
    <br />
    <router-link to="/publish/notice/detail">AST_NOT_101 홈 > 공지사항 > 상세</router-link>
    <br />
    <br />
    <router-link to="/publish/applicationapproval">AST_REC_100 홈 > 토큰증권 신청승인</router-link>
    <br />
    <br />
    <router-link to="/publish/applicationApproval/detail"
      >AST_REC_101 토큰증권 신청승인 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/approvalprocessing/list"
      >AST_PRO_100 홈 > 토큰증권 승인처리</router-link
    >
    <br />
    <br />
    <router-link to="/publish/approvalprocessing/detail"
      >AST_PRO_101 홈 > 토큰증권 승인처리 > 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/securitytoken"
      >AST_STI_100 홈 > 현황 > 토큰증권 현황</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/securitytoken/detail"
      >AST_STI_101 홈 > 현황 > 토큰증권 현황 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/publisher"
      >AST_STI_200 홈 > 현황 > 발행인현황</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/publisher/detail"
      >AST_STI_102 홈 > 현황 > 발행인현황 > 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/manager"
      >AST_STI_300 홈 > 현황 > 계좌관리기관현황</router-link
    >
    <br />
    <br />
    <router-link to="/publish/currentsituation/manager/detail"
      >AST_STI_103 홈 > 현황 > 계좌관리기관현황 > 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/statics/all">AST_STA_100 홈 > 통계</router-link>
    <br />
    <br />
    <router-link to="/publish/statics/publisher">AST_STA_101 홈 > 통계 > 발행인별</router-link>
    <br />
    <br />
    <router-link to="/publish/statics/all">AST_STA_102 홈 > 통계 > 계좌관리기관별</router-link>
    <br />
    <br />
    <router-link to="/publish/monitoring">AST_MAI_100 홈 > 모니터링</router-link>
    <br />
    <br />
    <router-link to="/publish/sitemanagement/terms"
      >AST_SIT_100 홈 > 사이트 관리 > 약관 관리</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/terms/detail"
      >AST_SIT_101 홈 > 사이트 관리 > 약관 관리 > 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/terms/add"
      >AST_SIT_102 홈 > 사이트 관리 > 약관 관리 > 등록</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/notice"
      >AST_SIT_200 홈 > 사이트 관리 > 공지 관리</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/notice/detail"
      >AST_SIT_201 홈 > 사이트 관리 > 공지 관리 > 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/notice/add"
      >AST_SIT_202 홈 > 사이트 관리 > 공지 관리 > 등록</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/historyManagementpublisher"
      >AST_SIT_300 홈 > 사이트 관리 > 접속 이력 관리 > 발행인</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/historyManagementmanager"
      >AST_SIT_301 홈 > 사이트 관리 > 접속 이력 관리 > 계좌관리기관</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/commoncodemanagement"
      >AST_SIT_400 홈 > 사이트 관리 > 공통 코드 관리</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/commoncodemanagement/add"
      >AST_SIT_401 홈 > 사이트 관리 > 공통 코드 관리 > 등록</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/servicesetting"
      >AST_SIT_500 홈 > 사이트 관리 > 서비스환경설정</router-link
    >
    <br />
    <br />
    <router-link to="/publish/sitemanagement/moniFabric"
      >AST_SIT_600 홈 > 사이트 관리 > fabric</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/publisher"
      >AST_IDE_100 홈 > 계정관리 > 발행인</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/publisher/add"
      >AST_IDE_101 홈 > 계정관리 > 발행인 등록</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/publisher/detail"
      >AST_IDE_102 홈 > 계정관리 > 발행인 상세</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/manager"
      >AST_IDE_200 홈 > 계정관리 > 계좌관리기관</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/manager/add"
      >AST_IDE_201 홈 > 계정관리 > 계좌관리기관 등록</router-link
    >
    <br />
    <br />
    <router-link to="/publish/accountmanagement/manager/detail"
      >AST_IDE_202 홈 > 계정관리 > 계좌관리기관 상세</router-link
    >
    <router-link to="/publish/systemmanager/systemmanager"
      >AST_IDE_300 홈 > 계정관리 > 시스템운영자
    </router-link>
    <br />
    <br />
    <router-link to="publish/systemmanager/systemmanager/add"
      >AST_IDE_301 홈 > 계정관리 > 시스템운영자 > 등록
    </router-link>
    <br />
    <br />
    <router-link to="publish/systemmanager/systemmanager/detail"
      >AST_IDE_303 홈 > 계정관리 > 시스템운영자 > 상세
    </router-link>
    <br />
    <br />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
