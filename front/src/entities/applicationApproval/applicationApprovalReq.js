const applicationApprovalReq = {}

// 토큰증권 신청승인 목록 요청
/**
 * @param {Object} params - 요청 파라미터
 * @returns {Object} - 서버에 전송할 요청 데이터
 */
applicationApprovalReq.getApplicationApprovalList = (params) => {
  const requestSend = {
    fncorgSqno: params.fncorgSqno,      /** @property {Number} fncorgSqno - 계좌기간 일련번호 */
    rqDs: params.rqDs,                  /** @property {String} rqDs - 신청구분 */
    apvRzt: params.apvRzt,              /** @property {String} apvRzt - 승인결과 */
    srchwd: params.srchwd,              /** @property {String} srchwd - 검색어 */
    srchwdItem: params.srchwdItem,      /** @property {String} srchwdItem - 검색어 입력 */
    inqmc: params.inqmc,                /** @property {String} inqmc - 기간코드 */
    inqmcSt: params.inqmcSt,            /** @property {String} inqmcSt - 조회기간 시작일 */
    inqmcEd: params.inqmcEd,            /** @property {String} inqmcEd - 조회기간 종료일 */
    sort: params.sort,                  /** @property {String} sort - 정렬 방법 */
    pageNum: params.pageNum             /** @property {Number} pageNum - 선택한 페이지 번호 */
  };
  return requestSend;
};

// 토큰증권 신청승인 상세 요청
/**
 * @param {Object} params
 * @param {number} params.fncorgC - 금융기관 시퀀스
 * @param {string} params.sctsItmC - 종목 코드
 */
applicationApprovalReq.getApplicationApprovalDetailPage = (params) => {

  const requestSend = {
    fncorgC: params.fncorgC,      /** @property {Number} fncorgC - 계좌기간 일련번호 */
    sctsItmC: params.sctsItmC,           /** @property {String} sctsItmC   - 종목 코드 */
  };

  return requestSend;
};

// 토큰증권 신청승인 상세 요청 처리
/**
 * @param {Object} params
 */
applicationApprovalReq.getApplicationApprovalDetailPageRq = (params) => {
  
  const requestSend = {
    
    fncorgC: params.fncorgC,      /** @property {Number} fncorgC - 계좌기간 일련번호 */
    rqDs: params.rqDs,                  /** @property {String} rqDs - 신청구분 */
    sctsItmC: params.sctsItmC           /** @property {String} sctsItmC   - 종목 코드 */
    
  }

  return requestSend
}
// 토큰증권 신청승인 상세 요청 거절
/**
 * @param {Object} params
 */
applicationApprovalReq.getApplicationApprovalDetailPageRej = (params) => {
  
  const requestSend = {
    
    fncorgC: params.fncorgC,      /** @property {Number} fncorgC - 계좌기간 일련번호 */
    sctsItmC: params.sctsItmC,          /** @property {String} sctsItmC   - 종목 코드 */
    rqDs: params.rqDs,                  /** @property {String} rqDs - 신청구분 */
    sctsMsg: params.sctsMsg             /** @property {String} sctsMsg   -  거절사유 */
  }

  return requestSend
}
export default applicationApprovalReq
