<!-- 토큰증권신청승인 > 상세 -->
<template>
  <!-- 페이지 레이아웃 및 뷰 -->
  <header role="mainHeader">
    <h1 class="ttl">토큰증권 신청승인 상세</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;토큰증권 신청승인 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
    </nav>
  </header>

  <!-- 신청정보 -->
  <article role="contents" title="신청정보">
    <hgroup class="ttl">
      <h3 class="ttl">신청정보</h3>
    </hgroup>
    <div class="unitWrap vertical">
      <!-- 해당 내용은 계좌관리기관의 stsc값을 확인 해 v-if 처리 부탁 드립니다.-->
      <!-- 타기관에서 거절한 신청내역입니다. (2024.04.25) -->
      <!-- (로그인한 계좌관리기관)님이 거절한 신청 내역입니다. (2024.04.25) -->
      <!-- (로그인한 계좌관리기관)님이 승인한 신청 내역입니다. (2024.04.25) -->
      <div class="rightItem">*승인이 필요한 신청 내역입니다.</div>
    </div>
    <table class="noline">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 38%" />
        <col style="width: 12%" />
        <col style="width: 38%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left">신청구분</th>
          <td class="left">{{ pageData.dczHst.rqDsNm }}</td>
          <th class="left">신청일</th>
          <td class="left">{{ formatDate(pageData.dczHst.rqrtm) }}</td>
        </tr>
        <tr>
          <!-- 이거 문서에서 밑에 작성 돼서 잘못 들어간 것 같습니다. 삭제 후, 위로 하나씩 올려주세요~ 이해 못함..ㅋㅋ-->
          <th class="left">최종 승인결과</th>
          <td class="left">
            <span :class="{'blue': pageData.dczHst.stacNm === '승인', 'error': pageData.dczHst.stacNm === '거절'}">{{ pageData.dczHst.stacNm }}</span>
            <!-- 거절일 경우에만 버튼 추가 -->
            <button v-if="pageData.dczHst.stacNm === '거절'" type="button" class="mediumLine ml6" @click="popupRej">거절사유</button>
            <span>({{pageData.dczHst.prctm }})</span>
          </td>
          <th class="left">토큰증권상태값</th>
          <td class="left">{{ pageData.dczHst.stscNm }}</td>
        </tr>
      </tbody>
    </table>
  </article>

  <!-- 발행인정보 > 1.대표발행인 -->
  <article role="contents" title="발행인정보">
    <hgroup class="ttl">
      <h3 class="ttl">발행인정보</h3>
      <h4 class="ttl">1. 대표발행인</h4>
    </hgroup>
    <table class="noline mb40">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 38%" />
        <col style="width: 12%" />
        <col style="width: 38%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left">회사명</th>
          <td class="left">{{ pageData.pbcco.pbccoNm }}</td>
          <th class="left">대표자명</th>
          <td class="left">{{ pageData.pbcco.ceoNm }}</td>
        </tr>
        <tr>
          <th class="left">사업자번호</th>
          <td class="left">{{ pageData.pbcco.bzno }}</td>
          <th class="left">법인등록번호</th>
          <td class="left">{{ pageData.pbcco.copno }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 발행인정보 > 공동발행인 정보 -->
    <div v-if="coPbccoVisible">
      <hgroup class="ttl">
        <h4 class="ttl">2. 공동발행인</h4>
      </hgroup>
      <table class="noline mb40">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr v-for="(name, index) in coPbccoNames" :key="index">
            <th class="left">회사명</th>
            <td class="left">{{ name }}</td>
            <th class="left">사업자번호</th>
            <td class="left">{{ coPbccoBznos[index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>

  <!-- 토큰증권정보 > 1. 공모개요 -->
  <article role="contents" title="토큰증권정보">
    <hgroup class="ttl">
      <h3 class="ttl">토큰증권정보</h3>
      <h4 class="ttl">1. 공모개요</h4>
    </hgroup>
    <table class="noline mb40">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 38%" />
        <col style="width: 12%" />
        <col style="width: 38%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left">토큰증권명</th>
          <td class="left" colspan="3">{{ pageData.scts.sctsItmNm }}</td>
        </tr>
        <tr>
          <th class="left">증권종류</th>
          <td class="left">{{ pageData.scts.sttNm }}</td>
          <th class="left">종목코드<br /><sub>(증권표준코드)</sub></th>
          <td class="left">{{ pageData.scts.sctsItmC }}</td>
        </tr>
        <tr>
          <th class="left">모집(매출)방법</th>
          <td class="left">{{ pageData.scts.slMeth }}</td>
          <th class="left">증권수량</th>
          <td class="left">{{ formatNumber(pageData.scts.sctsQt) }} 주</td>
        </tr>
        <tr>
          <th class="left">액면가액</th>
          <td class="left">{{ formatCurrency(pageData.scts.parPr) }} 원</td>
          <th class="left">모집(매출)가액</th>
          <td class="left">{{ formatCurrency(pageData.scts.slPr) }} 원</td>
        </tr>
        <tr>
          <th class="left">모집(매출)총액</th>
          <td class="left">{{ formatCurrency(pageData.scts.slTam) }} 원</td>
          <th class="left">최종 승인결과</th>
          <td class="left">
            <span :class="{'error': pageData.scts.sttNm === '거절'}">{{ pageData.scts.sttNm }}</span>
            <span>({{ formatDate(pageData.scts.asgDt) }})</span>
          </td>
        </tr>
        <tr>
          <th class="left">증권신고일</th>
          <td class="left">{{ formatDate(pageData.scts.sctsRptDt) }}</td>
          <th class="left">배정기간</th>
          <td class="left">{{ formatDate(pageData.scts.asgStdt) }} ~ {{ formatDate(pageData.scts.asgEdt) }}</td>
        </tr>
        <tr>
          <th class="left">청약공고일</th>
          <td class="left">{{ formatDate(pageData.scts.sbpNtfyDt) }}</td>
          <th class="left">배정공고일</th>
          <td class="left">{{ formatDate(pageData.scts.asgNtfyDt) }}</td>
        </tr>
        <tr>
          <th class="left">배정 및 환불공고일</th>
          <td class="left">{{ formatDate(pageData.scts.asgDt) }}</td>
        </tr>
        <tr>
          <th class="left">권리내용</th>
          <td colspan="3">
            <label>
              <textarea placeholder="없음" readonly class="w100" v-model="pageData.scts.rghCntn"></textarea>
            </label>
          </td>
        </tr>
      </tbody>
    </table>

<!-- 토큰증권정보 > 2. 배정대상자 유형별 공모대상 증권 수 -->
<hgroup class="ttl">
  <h4 class="ttl">2. 배정대상자 유형별 공모대상 증권 수</h4>
</hgroup>
<table class="chart mb40">
  <colgroup>
    <col style="width: 20%" />
    <col style="width: 20%" />
    <col style="width: 20%" />
    <col style="width: 20%" />
    <col style="width: 20%" />
  </colgroup>
  <thead>
    <tr>
      <th class="center">구분</th>
      <th class="center">증권수</th>
      <th class="center">배정비율</th>
      <th class="center">주당공모가액</th>
      <th class="center">모집(매출)총액</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(asg, index) in pageData.sctsAsg" :key="index">
      <td class="center">{{ asg.asgObj }}</td>
      <td class="right">{{ formatNumber(asg.asgQt) }} 주</td>
      <td class="right">{{ asg.asgRto }}%</td>

      <!-- 첫 번째 행에서 rowspan을 사용하여 주당공모가액을 병합 -->
      <template v-if="index === 0">
        <td class="right" :rowspan="pageData.sctsAsg.length + 1">
          {{ formatCurrency(asg.slPrPs) }} 원
        </td>
      </template>
      
      <td class="right">{{ formatCurrency(asg.slTam) }} 원</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td class="center">합계</td>
      <td class="right">{{ totalAsgQt }} 주</td>
      <td class="right">{{ totalAsgRto }} %</td>
      <td class="right">&nbsp;</td> <!-- 주당공모가액 합계에서는 공란 처리 -->
      <td class="right">{{ formatCurrency(totalSlTam) }} 원</td>
    </tr>
  </tfoot>
</table>

<!-- 토큰증권정보 > 3. 추가정보 -->
<hgroup class="ttl">
  <h4 class="ttl">3. 추가정보</h4>
</hgroup>
<table class="noline">
  <colgroup>
    <col style="width: 12%" />
    <col style="width: 38%" />
    <col style="width: 12%" />
    <col style="width: 38%" />
  </colgroup>
  <tbody>
    <tr>
      <th class="left">증권신고서 공시 URL</th>
      <td class="left">
        <a :href="pageData.scts.wrptNtcUrl" target="_blank">{{ pageData.scts.wrptNtcUrl }}</a>
      </td>
      <th class="left">투자설명서 공시 URL</th>
      <td class="left">
        <a :href="pageData.scts.ivmnlNtcUrl" target="_blank">{{ pageData.scts.ivmnlNtcUrl }}</a>
      </td>
    </tr>
    <tr>
      <th class="left">증권신고서</th>
      <td class="left"><a :href="pageData.scts.ipfsUrl" target="_blank">증권신고서.pdf</a></td>
      <th class="left">청산대리인명</th>
      <td class="left">{{ pageData.scts.lqdAgnt }}</td>
    </tr>
  </tbody>
</table>
</article>

<!-- 계좌기관정보 -->
<article role="contents" class="mb0" title="계좌기관정보">
  <hgroup class="ttl">
    <h3 class="ttl">계좌기관정보</h3>
  </hgroup>
  <table class="chart">
    <colgroup>
      <col style="width: 25%" />
      <col style="width: 25%" />
      <col style="width: 25%" />
      <col style="width: 25%" />
    </colgroup>
    <thead>
      <tr>
        <th class="center">계좌관리기관명</th>
        <th class="center">할당 발행토큰 수량</th>
        <th class="center">확정투자자수</th>
        <th class="center">승인결과</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fncorg, index) in pageData.sctsFncorg" :key="index">
        <td class="center">{{ fncorg.fncorgNm }}</td>
        <td class="right">{{ formatNumber(fncorg.alcPucSctsQt) }} 주</td>
        <td class="right">{{ fncorg.dfnIvmnPers }} 명</td>
        <td class="center">
          <span :class="{'blue': fncorg.stscNm === '승인', 'error': fncorg.stscNm === '거절'}">{{ fncorg.stscNm }}</span>
          <span v-if="fncorg.prctm">({{ formatDate(fncorg.prctm) }})</span>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="center">합계</td>
        <td class="right">{{ totalAlcPucSctsQt }} 주</td>
        <td class="right">{{ totalDfnIvmnPers }} 명</td>
        <td class="center">&nbsp;</td>
      </tr>
    </tfoot>
  </table>
  <div class="cautionBlue">
    <p>*다수의 계좌관리기관이 있을 경우 모두의 승인을 득한 후 처리가 됩니다.</p>
    <p>*한번 승인한 신청은 수정 불가합니다.</p>
  </div>
</article>

<!-- 하단 버튼 -->
<footer class="bottomBtnArea" role="mainFooter">
  <button type="button" class="largeLine" @click="goBack">목록</button>

  <button type="button" class="large" v-if="showRejectAndApproveButtons"  @click="popupRej">거절</button>
  <button type="button" class="large" v-if="showRejectAndApproveButtons" @click="popupRq">승인</button>
</footer>
<div>dd</div>

<!-- 팝업 컴포넌트 -->
<rejectReasonInputPopup v-if="showRejectInputPopup" @close="showRejectInputPopup = false" />
<rejectReasonDetailPopup v-if="showRejectDetailPopup" @close="showRejectDetailPopup = false" />
<confirmedInvestorListPopup v-if="showInvestorListPopup" @close="showInvestorListPopup = false" />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import rejectReasonInputPopup from '@/components/popup/rejectReasonInputPopup.vue';
import rejectReasonDetailPopup from '@/components/popup/rejectReasonDetailPopup.vue';
import confirmedInvestorListPopup from '@/components/popup/confirmedInvestorListPopup.vue';
import POPUP from '@/utils/popupSettings';
import { useRoute,useRouter } from 'vue-router';
import securityTokenAdminApi from '@/assets/api/AdminApi.js';

const reqParam = useRoute()
const router =  useRouter()


// 팝업 상태 관리 (ref 는 reactive 보다 먼저 실행 )
const showRejectInputPopup = ref(false);
const showRejectDetailPopup = ref(false);
const showInvestorListPopup = ref(false);
const pageData = reactive({
 
  // 신청정보
  dczHst: {
    rqDs: '',           // 1. 신청구분
    rqDsNm: '',         // 2. 최종승인결과 (토큰증권 액션코드명)
    rqrtm: '',          // 3. 신청일
    stscNm: '',         // 4. 토큰증권상태값 (토큰증권 상태코드명)
    stacNm: '',         // 5. 최종승인날짜
    prctm:''            // 6. 상태 코드
  },

  // 발행인 정보
  pbcco: {
    pbccoSqno: '',      // 1. 발행사 sequence no 
    pbccoNm: '',        // 2. 회사명
    ceoNm: '',          // 3. 대표자명
    bzno: '',           // 4. 사업자번호
    copno: ''           // 5. 법인등록번호
  },

  // 토큰증권정보
  scts: {
    sctsItmNm: '',      // 1. 토큰증권명
    sttNm: '',          // 2. 증권종류 이름
    sctsItmC: '',       // 3. 종목코드
    slMeth: '',         // 4. 모집 매출 방법
    sctsQt: 0,          // 5. 증권수량
    parPr: 0,           // 6. 액면가액
    slPr: 0,            // 7. 모집(매출)가액
    slTam: 0,           // 8. 모집(매출)총액
    sctsRptDt: '',      // 9. 증권신고일
    asgPrd: '',         // 10. 배정(청약) 기간
    asgStdt: '',        // 11. 청약 시작일
    asgEdt: '',         // 12. 청약 종료일
    sbpNtfyDt: '',      // 13. 청약 공고일
    asgNtfyDt: '',      // 14. 배정 공고일
    asgDt: '',          // 15. 배정 및 환불 공고일
    rghCntn: '',        // 16. 권리내용
    wrptNtcUrl: '',     // 17. 증권신고서 공시 URL
    ivmnlNtcUrl: '',    // 18. 투자신고서 공시 URL
    coPbccoNm: '',      // 19. 공동발행인 (comma로 구분)
    coPbccoBzno: '',    // 20. 공동발행인 사업자등록번호 (comma로 구분)    
    rgdId: '',          // 21. 발행자 ID (login ID)
    ipfsUrl: '',        // 22. 증권신고서 정보
    lqdAgnt: ''         // 23. 청산대리인명
  },

  // 배정대상자 유형별 공모대상 증권 수
  sctsAsg: [
    {
      sctsItmC: '',     // 1. 종목코드
      asgObj: '',       // 2. 청약대상자 유형별 공모대상 증권수, 구분
      asgQt: 0,         // 3. 증권수량
      asgRto: 0,        // 4. 배정비율
      slPrPs: 0,        // 5. 모집 매출 총액
      slTam: 0          // 6. 모집 매출 총액
    }
  ],

  // 확정투자자 명부 (dfnlvmn)
  dfnlvmn: {
    sts: ''             // 1. 확정 투자자 명부 상태
  },

  // 계좌관리기관 정보
  sctsFncorg: [
    {
      sctsItmC: '',     // 1. 종목코드
      fncorgC: '',      // 2. 계좌관리기관 코드
      fncorgNm: '' ,    // 3. 계좌관리기관명
      dfnIvmnPers: 0,   // 4. 확정투자자수
      alcPucSctsQt: 0,  // 5. 할당발행 토큰 수량
      stscNm: '',       // 6. 승인결과 (상태코드명)
      prctm: ''         // 7. 처리시각 (승인 날짜)
    }
  ],

  // 청산증빙자료
  sctsWrpt: [
    {
      orgApflnm:'',     // 1. 원본첨부파일명
      wrptTpcNm: '',    // 2. 청산
      wrptSqno:0 ,      // 3. 시퀀스
      wrptTpc: '',      // 4. ?
      sctsItmC: '',     // 5. 종목코드
      rgdDt: '',        // 6. 일자
      flPath:'',        // 7. 파일경로
      xcrnm: ''         // 8. 파일확장자
    }
  ]
  })

// 배정대상자 합계
const totalAsgQt = pageData.sctsAsg.reduce((sum, asg) => sum + asg.asgQt, 0);
const totalAsgRto = pageData.sctsAsg.reduce((sum, asg) => sum + parseFloat(asg.asgRto), 0);; //배정비율
const totalSlTam = pageData.sctsAsg.reduce((sum, asg) => sum + asg.slTam, 0);

//계좌기관정보 합계
const totalAlcPucSctsQt = pageData.sctsFncorg.reduce((sum, fncorg) => sum + fncorg.alcPucSctsQt, 0);
const totalDfnIvmnPers = pageData.sctsFncorg.reduce((sum, fncorg) => sum + fncorg.dfnIvmnPers, 0);

// 공동발행인 정보 처리
const coPbccoVisible = pageData.scts.coPbccoNm && pageData.scts.coPbccoNm.length > 0;
const coPbccoNames =  pageData.scts.coPbccoNm ? pageData.scts.coPbccoNm.split(',') : [];
const coPbccoBznos =  pageData.scts.coPbccoBzno ? pageData.scts.coPbccoBzno.split(',') : [];

// 날짜 형식화 함수
const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('ko-KR');

// 숫자 형식화 함수
const formatNumber = (num) => num ? num.toLocaleString('ko-KR') : '0';

// 금액 형식화 함수
const formatCurrency = (num) => num ? num.toLocaleString('ko-KR') : '0';

// [명부확인] 팝업
// [거절] 팝업
const popupRej = () => {
  POPUP.APPLICATIONAPPROVAL.APPROVE_CONFIRM(
    () => console.log('아니오'),
    () => console.log('예')
  );
};
// [승인] 팝업
const popupRq = () => {
  POPUP.APPLICATIONAPPROVAL.APPROVE_CONFIRM(
    () => console.log('아니오'),
    () => console.log('예')
  );
};

// 버튼 노출 여부
const calculateShowRejectAndApproveButtons = () => {
  // 최종 승인결과가 '승인' 또는 '거절'이면 버튼을 숨김
  const isFinalApprovedOrRejected = pageData.dczHst.stacNm === '승인' || pageData.dczHst.stacNm === '거절';
  
  // 계좌 관리기관 중 하나라도 거절 상태인 경우
  const hasAnyRejectedFncorg = pageData.sctsFncorg.some(fncorg => fncorg.stscNm === '거절');
  
  // 최종 승인 or 계좌 관리기관이 거절일 때 버튼 숨김
  return !isFinalApprovedOrRejected && !hasAnyRejectedFncorg;
};



// 데이터 가져오기
const fetchTokens = async () => {
  try {

    const requestData = {

      fncorgC: reqParam.query.fncorgC ,
      sctsItmC:  reqParam.query.sctsItmC 
    };
    // API 호출

    const response = await securityTokenAdminApi.applicationApproval.appAppDetail(requestData);

    // 응답 데이터를 Vue 상태 변수에 저장
    pageData.dczHst = response.dczHst || {};
    pageData.pbcco = response.pbcco || {};
    pageData.scts = response.scts || {};
    pageData.sctsAsg = response.sctsAsg || [];
    pageData.sctsFncorg = response.sctsFncorg || [];
    pageData.sctsWrpt = response.sctsWrpt || [];

  } catch (error) {
    console.error('Error fetching token data:', error);
  }  finally {
    pageData.loading = false;  // 데이터 로딩 완료
  }

};

// 버튼 노출 함수 호출
const showRejectAndApproveButtons = calculateShowRejectAndApproveButtons();

// 목록으로 돌아가는 함수
const goBack = () => {
  router.push({ name: 'applicationapprovalList' });
}
onMounted(() => {
  fetchTokens();
});
</script>

<style scoped>
/* 여기에 스타일 추가 */
</style>

<!-- Check List
미구현 
1. 배정대상자 주당공모가액 머지 관련 합계까지 머지가 안먹히는데 이거 확인좀 해야할듯
  -> 디자인과 동일하여 우선 놔두는 것으로...

확인 후 작업
1. 퍼블에 확정투자자 명부가 없음,
  -> 작업해 놓은게 있어서, 작업하시기 전에 머지해 드리겠습니다~ 
2. 승인팝업 : 승인처리 했을경우 문구 + 승인일자 같이 노출 처리
3. 거절팝업 : 거절처리했을경우 노출 문구+ 승인일자 같이 노출 처리
  -> 내용에 대해 이해를 못했습니다.
  -> 혹시, 제일 최 상단에 뜨는 노출 처리를 말씀하시는건가요?
4. 확정투자자수 파람이 없음 (dfnIvmnPers) 0 처리함
  -> 확정투자자수 기능 개발이 완료되면 그때 테스트 진행
5. 1-2 증권값 노출 케이스에 프론트처리 사항이 있는지 확인해야함 없을거 같긴함..
  -> 토큰증권상태값에 따른 예외처리는 한번 확인해 보겠습니다.
6. 퍼블 풋터 쪽 하단 여백이 없는데...수정해야할듯
   -> 퍼블 전체 수정 할 때, 적용하겠습니다~
-->