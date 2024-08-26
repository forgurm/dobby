import commonRes from '@/entities/commonRes'

const applicationApprovalRes = {};

/**
 * 토큰증권신청승인 목록 응답
 * @param {Object} res
 * @returns {Object} 
 */
applicationApprovalRes.getApplicationApprovalList = (res) => {
  console.log('data Res:',res)
  const resSend = {
    ...commonRes(res),
    
    data: {
      contents: res.data.contents.map((item)  => ({
        apvRzt: item.apvRzt,           /** @property {String} apvRzt - 승인결과 */
        asgNtfyDt: item.asgNtfyDt,     /** @property {String} asgNtfyDt - 배정공고일 */
        no: item.no,                   /** @property {Number} no - 일련번호 */
        pbccoNm: item.pbccoNm,         /** @property {String} pbccoNm - 발행사명 */
        rqDs: item.rqDs,               /** @property {String} rqDs - 신청구분 */
        rqDsNm: item.rqDsNm,           /** @property {String} rqDsNm - 신청구분명*/
        rqrTm: item.rqrTm,             /** @property {String} rqrTm - 신청일 */
        sbpPrd: item.sbpPrd,           /** @property {String} sbpPrd - 청약기간 */
        sctsItmC: item.sctsItmC,       /** @property {String} sctsItmC - 종목코드 */
        sctsQt: item.sctsQt,           /** @property {Number} sctsQt - 토큰증권수량 */
        sctsItmNm: item.sctsItmNm,     /** @property {Number} sctsItmNm - 토큰증권명 */
        stscNm: item.stscNm,           /** @property {String} stscNm - 토큰증권상태값 */
        pbccoSqno: item.pbccoSqno      /** @property {String} pbccoSqno - 발행사 시퀀스 번호 */
      })),
      pageNumber: res.data.pageNumber, /** @property {Number} pageNumber - 페이지 번호 */
      pageSize: res.data.pageSize,     /** @property {Number} pageSize - 페이지 크기 */
      totalElements: res.data.totalElements, /** @property {Number} totalElements - 총 요소 수 */
      totalPages: res.data.totalPages  /** @property {Number} totalPages - 총 페이지 수 */
    }
  };
  
  return resSend;
};

/**
 * 토큰증권신청승인 상세 응답
 * @param {Object} res
 * @returns {Object}
 */
applicationApprovalRes.getApplicationApprovalDetailPage = (res) => {
  const responseSend = {
    ...commonRes(res),
    // 신청 정보
    dczHst: {
      rqDs: res.data.dczHst.rqDs,             /** @property {String} rqDs - 신청구분 */
      rqDsNm: res.data.dczHst.rqDsNm,         /** @property {String} rqDsNm - 신청구분 이름 */
      rqrtm: res.data.dczHst.rqrtm,           /** @property {String} rqrTm - 신청일 */
      stacNm: res.data.dczHst.stacNm,         /** @property {String} stacNm - 최종승인결과 */
      stscNm: res.data.dczHst.stscNm,         /** @property {String} stscNm - 토큰증권상태값 (토큰증권 상태코드명) */
      prctm: res.data.dczHst.prctm            /** @property {String} prctm - 최종승인날짜 */
    },

    // 발행인 정보
    pbcco: {
      pbccoSqno: res.data.pbcco.pbccoSqno,    /** @property {String} pbccoSqno - 발행사 시퀀스 번호 */
      pbccoNm: res.data.pbcco.pbccoNm,        /** @property {String} pbccoNm - 회사명 */
      ceoNm: res.data.pbcco.ceoNm,            /** @property {String} ceoNm - 대표자명 */
      bzno: res.data.pbcco.bzno,              /** @property {String} bzno - 사업자번호 */
      copno: res.data.pbcco.copno             /** @property {String} copno - 법인등록번호 */

    },

    // 토큰증권 정보
    scts: {
      sctsItmNm: res.data.scts.sctsItmNm,     /** @property {String} sctsItmNm - 토큰증권명 */
      sttNm: res.data.scts.sttNm,             /** @property {String} sttNm - 증권종류 이름 */
      sctsItmC: res.data.scts.sctsItmC,       /** @property {String} sctsItmC - 종목코드 */
      slMeth: res.data.scts.slMeth,           /** @property {String} slMeth - 모집(매출) 방법 */
      sctsQt: res.data.scts.sctsQt,           /** @property {Number} sctsQt - 증권수량 */
      parPr: res.data.scts.parPr,             /** @property {Number} parPr - 액면가액 */
      slPr: res.data.scts.slPr,               /** @property {Number} slPr - 모집(매출)가액 */
      slTam: res.data.scts.slTam,             /** @property {Number} slTam - 모집(매출)총액 */
      sctsRptDt: res.data.scts.sctsRptDt,     /** @property {String} sctsRptDt - 증권신고일 */
      asgPrd: res.data.scts.asgPrd,           /** @property {String} asgPrd - 배정(청약) 기간 */
      asgStdt: res.data.scts.asgStdt,         /** @property {String} asgStdt - 청약 시작일 */
      asgEdt: res.data.scts.asgEdt,           /** @property {String} asgEdt - 청약 종료일 */
      sbpNtfyDt: res.data.scts.sbpNtfyDt,     /** @property {String} sbpNtfyDt - 청약 공고일 */
      asgNtfyDt: res.data.scts.asgNtfyDt,     /** @property {String} asgNtfyDt - 배정 공고일 */
      asgDt: res.data.scts.asgDt,             /** @property {String} asgDt - 배정 및 환불 공고일 */
      rghCntn: res.data.scts.rghCntn,         /** @property {String} rghCntn - 권리내용 */
      wrptNtcUrl: res.data.scts.wrptNtcUrl,   /** @property {String} wrptNtcUrl - 증권신고서 공시 URL */
      ivmnlNtcUrl: res.data.scts.ivmnlNtcUrl, /** @property {String} ivmnlNtcUrl - 투자설명서 공시 URL */
      coPbccoNm: res.data.scts.coPbccoNm,     /** @property {String} coPbccoNm - 공동발행인 이름 */
      coPbccoBzno: res.data.scts.coPbccoBzno, /** @property {String} coPbccoBzno - 공동발행인 사업자등록번호 */
      rgdId: res.data.scts.rgdId,             /** @property {String} rgdId - 발행자 ID */
      ipfsUrl: res.data.scts.ipfsUrl,         /** @property {String} ipfsUrl - 증권신고서 정보 URL */
      lqdAgnt: res.data.scts.lqdAgnt          /** @property {String} lqdAgnt - 청산대리인명 */
    },

    // 배정대상자 유형별 공모대상 증권수
    sctsAsg: res.data.sctsAsg.map(asg => ({
      sctsItmC: asg.sctsItmC,                 /** @property {String} sctsItmC - 종목코드 */
      asgObj: asg.asgObj,                     /** @property {String} asgObj - 청약대상자 유형별 공모대상 증권수, 구분 */
      asgQt:  asg.asgQt,                      /** @property {Number} asgQt - 증권수량 */
      asgRto: asg.asgRto,                     /** @property {Number} asgRto - 배정비율 */
      slPrPs: asg.slPrPs,                     /** @property {Number} slPrPs - 주당 공모가액 */
      slTam:  asg.slTam                       /** @property {Number} slTam - 모집 매출 총액 */
    })) || [],      

    // 확정투자자명부 상태
    dfnIvmn: res.data.dfnIvmn || {},          /** @property {String} sts - 확정투자자명부 상태 */

    // 계좌관리기관 정보
    sctsFncorg: res.data.sctsFncorg.map(fncorg => ({
      sctsItmC:     fncorg.sctsItmC,          /** @property {String} sctsItmC - 종목코드 */
      fncorgC:    fncorg.fncorgC,             /** @property {String} fncorgC - 계좌관리기관 코드 */
      fncorgNm:   fncorg.fncorgNm,            /** @property {String} fncorgNm - 계좌관리기관 명 */
      dfnIvmnPers: fncorg.dfnIvmnPers ||0,    /** @property {String} dfnIvmnPers - 확정투자자 수 임시0명처리 */
      alcPucSctsQt: fncorg.alcPucSctsQt,      /** @property {Number} alcPucSctsQt - 할당 발행 토큰 수량 */
      stscNm:     fncorg.stscNm,              /** @property {String} stscNm - 승인결과 (상태코드명) */
      prctm:       fncorg.prctm               /** @property {String} prctm - 처리시각 (승인 날짜) */

    })) || []

    // 청산 및 증권신고서 파일명
    // sctsWrpt: res.data.sctsWrpt.map(file => ({
    //   orgApflnm: file.orgApflnm,              /** @property {String} orgApflnm - 원본첨부파일명 */
    //   wrptTpcNm: file.wrptTpcNm,              /** @property {String} wrptTpcNm - 보고서 주제 이름 */
    //   wrptSqno: file.wrptSqno,                /** @property {Number} wrptSqno - 원본첨부파일 일련번호 */
    //   wrptTpc: file.wrptTpc,                  /** @property {String} wrptTpc - 보고서 주제 */
    //   sctsItmC: file.sctsItmC,                /** @property {String} sctsItmC - 종목코드 */
    //   rgdDt: file.rgdDt,                      /** @property {String} rgdDt - 등록 날짜 */
    //   flPath: file.flPath,                    /** @property {String} flPath - 파일경로 */
    //   xcrnm: file.xcrnm                       /** @property {String} xcrnm - 파일 확장자 */
    // })) || []
  };
  return responseSend;
};

/**
 * 토큰증권신청승인 상세 요청처리 응답
 * @param {Object} res
 * @returns {Object}
 */
applicationApprovalRes.gettokenSecurityApplicationApprovalDetailPageRq = (res) => {
  const resData = {
    ...commonRes(res),
    data: {
      fncorgSqno: res.data.fncorgSqno,    /** @property {String} fncorgSqno - 계좌관리기관 시퀀스 번호 */
      sctsItmC: res.data.sctsItmC         /** @property {String} sctsItmC - 종목코드 */
    }
  };

  return resData;
};

/**
 * 토큰증권신청승인 상세 요청거절 응답
 * @param {Object} res
 * @returns {Object}
 */
applicationApprovalRes.gettokenSecurityApplicationApprovalDetailPageRej = (res) => {
  const resData = {
    ...commonRes(res),
    data: {
      fncorgSqno: res.data.fncorgSqno,    /** @property {String} fncorgSqno - 계좌관리기관 시퀀스 번호 */
      sctsItmC: res.data.sctsItmC         /** @property {String} sctsItmC - 종목코드 */
    }
  };

  return resData;
};

export default applicationApprovalRes;