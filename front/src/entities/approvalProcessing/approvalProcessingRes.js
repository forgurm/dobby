import commonRes from '@/entities/commonRes'
const approvalProcessingRes = {}

/**
 * 토큰증권 승인처리 목록조회
 * @param {Object} res - API 응답
 * @returns {Object} - Formatted response
 */
// 토큰증권 승인처리 목록조회
approvalProcessingRes.getApprovalProcessingList = (res) => {

  const response = {
    ...commonRes(res), // commonRes의 결과를 포함
    data: {
      contents: res.data.contents.map((item)  => ({
        asgNtfyDt: item.asgNtfyDt,                            /** @property {String} asgNtfyDt          - 배정공고일 */
        asgPrd: item.asgPrd,                                  /** @property {String} asgPrd             - 청약기간 */
        fncorgCn: item.fncorgCn,                              /** @property {Number} fncorgCn           - 계좌관리기관 */
        no: item.no,                                          /** @property {Number} no                 - 번호 */
        pbccoNm: item.pbccoNm,                                /** @property {String} pbccoNm            - 발행사명 */
        rqDs: item.rqDs,                                      /** @property {String} rqDs               - 신청구분코드 */
        rqDsNm: item.rqDsNm,                                  /** @property {String} rqDsNm             - 신청구분명 */
        rqrtm: item.rqrtm,                                    /** @property {String} rqrtm              - 신청일 */
        sctsItmC: item.sctsItmC,                              /** @property {String} sctsItmC           - 종목코드 */
        sctsQt: item.sctsQt,                                  /** @property {Number} sctsQt             - 총 발행수량 */
        stscNm: item.stscNm                                   /** @property {String} stscNm             - 토큰증권상태 */
      })),
      pageNumber:     res.data.pageNumber ,                   /** @property {Number} pageNumber         - 현재 페이지 번호 */
      pageSize:       res.data.pageSize ,                     /** @property {Number} pageSize           - 페이지 크기 */
      totalElements:  res.data.totalElements ,                /** @property {Number} totalElements      - 전체 요소 수 */
      totalPages:     res.data.totalPages                     /** @property {Number} totalPages         - 전체 페이지 수 */
    }
  };
  return response;
};

/**
 * 토큰증권 승인처리 상세조회
 * @param {Object} res - 응답 데이터
 * @returns {Object} - 파싱된 데이터
 */
approvalProcessingRes.getApprovalProcessingDetailPage = (res) => {
  const responseSend = {
    ...commonRes(res),
    dczHst: { 
      pltfPrctm: res.data.dczHst.pltfPrctm ,                    /** @property {String} pltfPrctm    - 플랫폼 처리 시간 */
      prctm: res.data.dczHst.prctm  ,                           /** @property {String} prctm        - 처리 시간 */
      rqDs: res.data.dczHst.rqDs ,                              /** @property {String} rqDs         - 신청 구분 */
      rqDsNm: res.data.rqDsNm,                                  /** @property {String} rqDsNm             - 신청구분명 */
      rqrtm: res.data.dczHst.rqrtm ,                            /** @property {String} rqrtm        - 요청 시간 */
      stacNm: res.data.dczHst.stacNm ,                          /** @property {String} stacNm       - 상태 이름 */
      stscMsg: res.data.dczHst.stscMsg ,                        /** @property {String} stscMsg      - 발행취소사유 */
      stscNm: res.data.dczHst.stscNm                            /** @property {String} stscNm       - 상태 메시지 */
    },  
    // 확정투자자명부
    dfnlvmn: res.data.dfnlvmn || {},

    // 발행인 정보 
    pbcco: {  
      pbccoSqno: res.data.pbcco.pbccoSqno ,                      /** @property {Number} pbccoSqno    - 금융기관 시퀀스 번호 */
      pbccoNm: res.data.pbcco.pbccoNm ,                          /** @property {String} pbccoNm      - 회사명 */
      ceoNm: res.data.pbcco.ceoNm ,                              /** @property {String} ceoNm        - 대표자명 */
      bzno: res.data.pbcco.bzno ,                                /** @property {String} bzno         - 사업자 번호 */
      copno: res.data.pbcco.copno                                /** @property {String} copno        - 법인 등록 번호 */
    },

    // 토큰증권정보
    scts: {
      asgDt: res.data.scts.asgDt ,                                /** @property {String} asgDt        - 배정 및 환불 공고일 */
      asgEdt: res.data.scts.asgEdt ,                              /** @property {String} asgEdt       - 청약 종료일 */
      asgNtfyDt: res.data.scts.asgNtfyDt ,                        /** @property {String} asgNtfyDt    - 배정 공고일 */
      asgPrd: res.data.scts.asgPrd ,                              /** @property {String} asgPrd       - 배정 (청약) 기간 */
      asgStdt: res.data.scts.asgStdt ,                            /** @property {String} asgStdt      - 청약 시작일 */
      coPbccoBzno: res.data.scts.coPbccoBzno ,                    /** @property {String} coPbccoBzno  - 공동 발행사 사업자 번호 */
      coPbccoNm: res.data.scts.coPbccoNm ,                        /** @property {String} coPbccoNm    - 공동 발행사명 */
      ipfsUrl: res.data.scts.ipfsUrl ,                            /** @property {String} rgdId        - 증권신고서정보 */           
      ivmnlNtcUrl: res.data.scts.ivmnlNtcUrl ,                    /** @property {String} ivmnlNtcUrl  - 투자설명서 공시 URL */
      lqdAgnt: res.data.scts.lqdAgnt ,                            /** @property {String} lqdAgnt      - 청산 대리인명 */
      parPr: res.data.scts.parPr,                                 /** @property {Number} parPr        - 액면가액 */
      rgdId: res.data.scts.rgdId ,                                /** @property {String} rgdId        - 발행자 ID */
      rghCntn: res.data.scts.rghCntn ,                            /** @property {String} rghCntn      - 권리 내용 */
      sbpNtfyDt: res.data.scts.sbpNtfyDt ,                        /** @property {String} sbpNtfyDt    - 청약 공고일 */
      sctsItmC: res.data.scts.sctsItmC ,                          /** @property {String} sctsItmC     - 종목 코드 */
      sctsItmNm: res.data.scts.sctsItmNm ,                        /** @property {String} sctsItmNm    - 토큰증권명 */
      sctsQt: res.data.scts.sctsQt ,                              /** @property {Number} sctsQt       - 증권 수량 */
      sctsRptDt: res.data.scts.sctsRptDt ,                        /** @property {String} sctsRptDt    - 증권 신고일 */
      slTam: res.data.scts.slTam ,                                /** @property {Number} slTam        - 모집(매출)총액 */
      slMeth: res.data.scts.slMeth ,                              /** @property {String} slMeth       - 모집 매출 방법 */
      slPr: res.data.scts.slPr ,                                  /** @property {Number} slPr         - 모집(매출)가액 */
      sttNm: res.data.scts.sttNm ,                                /** @property {String} sttNm        - 증권 종류 이름 */
      wrptNtcUrl: res.data.scts.wrptNtcUrl                        /** @property {String} wrptNtcUrl   - 증권 신고서 공시 URL */
    },

    // 배정대상자 유형별 공모대상 증권수
    sctsAsgs: Array.isArray(res.data.sctsAsg) ? res.data.sctsAsg.map(asg => ({
      sctsItmC: asg.sctsItmC ,                                     /** @property {String} sctsItmC     - 종목 코드 */
      asgObj: asg.asgObj ,                                         /** @property {String} asgObj       - 배정 대상자 유형 */
      asgQt: asg.asgQt ,                                           /** @property {Number} asgQt        - 배정 수량 */
      asgRto: asg.asgRto ,                                         /** @property {Number} asgRto       - 배정 비율 */
      slTam: asg.slTam                                             /** @property {Number} slTam        - 모집(매출) 총액 */
    })) : [],

    // 계좌관리기관 정보
    sctsFncorg: Array.isArray(res.data.sctsFncorg) ? res.data.sctsFncorg.map(fncorg => ({
      sctsItmC: fncorg.sctsItmC ,                                   /** @property {String} sctsItmC     - 종목코드 */
      fncorgC: fncorg.fncorgC ,                                     /** @property {String} fncorgC      - 계좌관리기관 코드 */
      fncorgNm: fncorg.fncorgNm ,                                   /** @property {String} fncorgNm     - 금융기관명 */
      dfnIvmnPers: fncorg.dfnIvmnPers ,                             /** @property {Number} dfnIvmnPers  - 확정 투자자 수 */
      alcPucSctsQt: fncorg.alcPucSctsQt ,                           /** @property {Number} alcPucSctsQt - 할당 발행 토큰 수량 */
      stscNm: fncorg.stscNm ,                                       /** @property {String} stscNm       - 승인 결과 */
      prctm: fncorg.prctm                                           /** @property {String} prctm        - 승인 날짜 */
    })) : [],

    // 청산 증빙자료 (sctsWrpt)
    sctsWrpt: Array.isArray(res.data.sctsWrpt) ? res.data.sctsWrpt.map(wrpt => ({
      flPath: wrpt.flPath ,                                          /** @property {String} flPath       - 파일 경로 */
      orgApflnm: wrpt.orgApflnm ,                                    /** @property {String} orgApflnm    - 원본 첨부파일명 */
      rgdDt: wrpt.rgdDt ,                                            /** @property {String} rgdDt        - 등록 날짜 */
      sctsItmC: wrpt.sctsItmC ,                                      /** @property {String} sctsItmC     - 종목 코드 */
      wrptSqno: wrpt.wrptSqno ,                                      /** @property {Number} wrptSqno     - 보고서 시퀀스 */
      wrptTpc: wrpt.wrptTpc ,                                        /** @property {String} wrptTpc      - 보고서 유형 코드 */
      wrptTpcNm: wrpt.wrptTpcNm ,                                    /** @property {String} wrptTpcNm    - 보고서 유형 이름 */
      xcrnm: wrpt.xcrnm                                              /** @property {String} xcrnm        - 파일 확장자 */
    })) : []
  };

  return responseSend;
};

/**
 * 토큰증권 승인처리 요청처리
 * @param {Object} res - 응답 데이터
 * @returns {Object} - 처리된 응답 데이터
 */
approvalProcessingRes.getApprovalProcessingReqPrc = (res) => {
  return {
    code: res.code /** @property {Number} code - 응답 코드 */,
    msg: res.msg /** @property {String|null} msg - 응답 메시지 */,
    count: res.count /** @property {Number} count - 응답 데이터 개수 */,
    data: {
      fncorgSqno: res.data.fncorgSqno /** @property {Number} fncorgSqno - 금융기관 시퀀스 번호 */,
      rqDs: res.data.rqDs /** @property {String} rqDs - 신청 구분 */,
      sctsItmC: res.data.sctsItmC /** @property {String} sctsItmC - 종목 코드 */
    }
  }
}

/**
 * 토큰증권 승인처리 요청거절
 * @param {Object} res - 응답 데이터
 * @returns {Object} - 처리된 응답 데이터
 */
approvalProcessingRes.getApprovalProcessingReqCan = (res) => {
  return {
    code: res.code /** @property {Number} code - 응답 코드 */,
    msg: res.msg /** @property {String|null} msg - 응답 메시지 */,
    count: res.count /** @property {Number} count - 응답 데이터 개수 */,
    data: {
      fncorgSqno: res.data.fncorgSqno /** @property {Number} fncorgSqno - 금융기관 시퀀스 번호 */,
      rqDs: res.data.rqDs /** @property {String} rqDs - 신청 구분 */,
      sctsItmC: res.data.sctsItmC /** @property {String} sctsItmC - 종목 코드 */
    }
  }
}

export default approvalProcessingRes