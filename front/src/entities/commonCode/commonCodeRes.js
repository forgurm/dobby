import commonRes from '@/entities/commonRes'
const commonCodeRes = {}

commonCodeRes.stieAmnComnC = (res) => {
  console.log('res:', res)
  const requestSend = {
    ...commonRes(res),
    data: res.data
  }
  return requestSend
}

export default commonCodeRes

// 계좌관리기관 구분

// 계좌관리기관 구분에 대한 리스트 (ex) 은행 및 증권사 데이터)

// bankFncorgList: [  은행 계좌관리기관
// {
/** @property {[{ fncorgCfcC: String, fnOrgSqno: Number, fncorgC: String, fncorgNm: String }]} */
// fncorgCfcC'b01', 계좌관리기관 구분코드
// fnOrgSqno: '001', // 계좌관리기관 일련번호
// fncorgC: 'A001', // 계좌관리기관 코드
// fncorgNm: '농협은행' // 계좌관리기관명 (칭)
// }
// ]
