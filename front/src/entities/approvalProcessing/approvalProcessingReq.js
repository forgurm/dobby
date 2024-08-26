const approvalProcessingReq = {}

/**
 * @param {Object} params - 요청 파라미터
 * @param {number} params.fncorgSqno - 기관 번호
 * @param {string} params.rqDs - 신청구분
 * @param {string} params.sts - 상태
 * @param {string} params.srchwd - 검색어
 * @param {string} params.inqmc - 조회구분
 * @param {string} params.srchwdItem - 검색어 입력
 * @param {string} params.inqmcSt - 조회기간 시작일
 * @param {string} params.inqmcEd - 조회기간 종료일
 * @param {string} params.sort - 정렬순서
 * @param {number} params.pageNum - 페이지 번호
*/
// 토큰신청 승인처리 목록요청
approvalProcessingReq.getApprovalProcessingList = (params) => {
  //console.log('params:', JSON.stringify(params))
  // 요청 데이터를 구성합니다.
  const requestSend = {
    fncorgSqno: params.fncorgSqno,          /** @property {Number} fncorgSqno - 계좌기간 일련번호 */
    rqDs: params.rqDs,                      /** @property {String} rqDs       - 신청구분 */
    sts: params.sts ,                       /** @property {String} sts        - */
    srchwd: params.srchwd ,                 /** @property {String} srchwd     - 검색어 */
    inqmc: params.inqmc,                    /** @property {String} inqmc      - 조회 구분  */
    srchwdItem: params.srchwdItem,          /** @property {String} srchwdItem - 검색어 입력 */
    inqmcSt: params.inqmcSt,                /** @property {String} inqmcSt    - 조회 시작일 */
    inqmcEd: params.inqmcEd,                /** @property {String} inqmcEd    -  조회 종료일 */
    sort: params.sort,                      /** @property {String} sort       - 정렬순서 */
    pageNum: params.pageNum                 /** @property {String} pageNum    - 페이지 번호 */
  };
  return requestSend;
};

/**
 * @param {Object} params - 요청 파라미터
 * @param {Number} params.fncorgSqno - 금융기관 시퀀스 번호
 * @param {String} params.sctsItmC - 종목 코드
 * @param {String} params.rqDs - 신청 구분
 * @returns {Object} - 요청 데이터
 */
// 토큰신청 승인처리 상세요청
approvalProcessingReq.getApprovalProcessingDetailPage = (params) => {
  const requestSend = {
    fncorgSqno: params.fncorgSqno,          /** @property {Number} fncorgSqno - 계좌기간 일련번호 */
    sctsItmC: params.sctsItmC,              /** @property {String} sctsItmC   - 종목 코드 */
    rqDs: params.rqDs                       /** @property {String} rqDs       - 신청 구분 */
  };
  return requestSend;
};
/**
 * 토큰신청 승인처리 요청
 * @param {Object} params - 요청 파라미터
 * @param {number} params.fncorgSqno - 금융기관 시퀀스
 * @param {string} params.sctsItmC - 종목 코드
 * @param {string} params.rqDs - 신청 구분
 * @returns {Object} - 생성된 요청 데이터
 */
approvalProcessingReq.getApprovalProcessingReqPrc = (params) => {
  const requestSend = {
    fncorgSqno: parseInt(params.fncorgSqno)    /** @property {Number} fncorgSqno - 금융기관 시퀀스 번호 */,
    sctsItmC:   params.sctsItmC        /** @property {String} sctsItmC - 종목 코드 */,
    rqDs:       params.rqDs                /** @property {String} rqDs - 신청 구분 */
  };
  return requestSend;
};

/**
 * 토큰신청 승인처리 요청 거절
 * @param {Object} params - 요청 파라미터
 * @param {number} params.fncorgSqno - 금융기관 시퀀스
 * @param {string} params.sctsItmC - 종목 코드
 * @param {string} params.rqDs - 신청 구분
 * @returns {Object} - 생성된 요청 데이터
 */
approvalProcessingReq.getApprovalProcessingReqCan = (params) => {
  const requestSend = {
    fncorgSqno: parseInt(params.fncorgSqno)    /** @property {Number} fncorgSqno - 금융기관 시퀀스 번호 */,
    sctsItmC:   params.sctsItmC        /** @property {String} sctsItmC - 종목 코드 */,
    rqDs:       params.rqDs                /** @property {String} rqDs - 신청 구분 */
  };
  return requestSend;
};

export default approvalProcessingReq