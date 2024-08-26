<!-- 토큰증권 신청승인 처리 > 상세 조회 -->
<template>
  <header role="mainHeader" >
    <h1 class="ttl">토큰증권 신청승인 상세</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;토큰증권 신청승인 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
    </nav>
  </header>

  <article role="contents" title="신청정보">
    <hgroup class="ttl">
      <h3 class="ttl">신청정보</h3>
    </hgroup>

    <div class="unitWrap vertical">
      <!-- 관리자 처리 확인 여부 후 분기-->
      <!--토큰증권상태 중 완료 케이스 일 때 -->
      <!-- dczHst.stsc 값에서 맨끝자리 4로 끝나면 처리 완료라고 합니다. ex) 104 배정완료 -->
      <!-- <div class="rightItem">처리완료된 토큰증권입니다. ({{ state.dczHst.pltfPrctm }})</div> -->
      <!-- 그 외 -->
      <div class="rightItem">*처리가 필요한 토큰증권입니다.</div>
    </div>
    <!--//E:unitWrap-->
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
          <td class="left">{{ state.dczHst.rqDsNm }}</td>
          <!--<td class="left"><span class="error">발행취소</span></td>-->
          <th class="left">신청일</th>
          <td class="left">{{ state.dczHst.rqrtm }}</td>
        </tr>
        <tr>
          <th class="left">승인결과</th>
          <td class="left"><span class="blue">{{ state.dczHst.stacNm }}</span>(<span v-if="state.dczHst.pltfPrctm">({{ state.dczHst.pltfPrctm }})</span>)</td>
          <th class="left">토큰증권상태값</th>
          <!-- 관리자 처리 버튼 누르기전 후 분기 -->
          <td class="left">{{ state.dczHst.stscNm }}</td>
        </tr>
        <!-- 신청구분 : 발행취소 일 때 보여줌 -->
        <tr v-if="state.dczHst.stscMsg">
          <th class="left">발행취소 사유</th>
          <td colspan="3">
            <label>
              <textarea placeholder="없음" readonly class="w100" :value="state.dczHst.stscMsg"></textarea>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </article>

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
          <td class="left">{{ state.pbcco.pbccoNm }}</td>
          <th class="left">대표자명</th>
          <td class="left">{{ state.pbcco.ceoNm }}</td>
        </tr>
        <tr>
          <th class="left">사업자번호</th>
          <td class="left">{{ state.pbcco.bzno }}</td>
          <th class="left">법인등록번호</th>
          <td class="left">{{ state.pbcco.copno }}</td>
        </tr>
      </tbody>
    </table>
  </article>

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
          <td class="left" colspan="3">{{ state.scts.sctsItmNm }}</td>
        </tr>
        <tr>
          <th class="left">증권종류</th>
          <td>{{ state.scts.sttNm }}</td>
          <th class="left">종목코드</th>
          <td>{{ state.scts.sctsItmC }}</td>
        </tr>
        <tr>
          <th class="left">모집(매출)방법</th>
          <td class="left">{{ state.scts.slMeth }}</td>
          <th class="left">증권수량</th>
          <td class="left">{{ formatCurrency(state.scts.sctsQt) }} 주</td>
        </tr>
        <tr>
          <th class="left">액면가액</th>
          <td class="left">{{ formatCurrency(state.scts.parPr) }} 원</td>
          <th class="left">모집(매출)가액</th>
          <td class="left">{{ formatCurrency(state.scts.slPr) }} 원</td>
        </tr>
        <tr>
          <th class="left">모집(매출)총액</th>
          <td class="left">{{ formatCurrency(state.scts.slTam) }} 원</td>
          <th class="left">청약 공고일</th>
          <td class="left">{{ state.scts.sbpNtfyDt }}</td>
        </tr>
        <tr>
          <th class="left">배정기간</th>
          <td class="left">{{ state.scts.asgPrd }}</td>
          <th class="left">배정공고일</th>
          <td class="left">{{ state.scts.asgNtfyDt }}</td>
        </tr>
        <tr>
          <th class="left">배정 및 환불공고일</th>
          <td class="left">{{ state.scts.asgDt }}</td>
        </tr>
        <tr>
          <th class="left">권리내용</th>
          <td colspan="3">
            <label>
              <textarea placeholder="없음" readonly class="w100" :value="state.scts.rghCntn"></textarea>
            </label>
          </td>
        </tr>
      </tbody>
    </table>

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
        <tr v-for="(allocation, index) in state.sctsAsgs" :key="index">
          <td class="center">{{ allocation.asgObj }}</td>
          <td class="right">{{ formatCurrency(allocation.asgQt) }} 주</td>
          <td class="right">{{ allocation.asgRto }}%</td>
          
          <template v-if="index === 0">
            <td class="right" :rowspan="state.sctsAsgs.length + 1"> <!-- 합계행까지 포함 -->
              {{ formatCurrency(allocation.slTam / allocation.asgQt) }} 원
            </td>
          </template>
          <td class="right">{{ formatCurrency(allocation.slTam) }} 원</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="center">합계</td>
          <td class="right">{{ formatCurrency(totalAsgQt) }} 주</td>
          <td class="right">{{ totalAsgRto }} %</td>
          <td class="right">&nbsp;</td>
          <td class="right">{{ formatCurrency(totalSlTam) }} 원</td>
        </tr>
      </tfoot>
    </table>

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
          <th class="left">증권신고서공시url</th>
          <td class="left">
            <a :href="state.scts.wrptNtcUrl">{{ state.scts.wrptNtcUrl }}</a>
      </td>
      <th class="left">투자설명서공시 URL</th>
      <td class="left">
        <a :href="state.scts.ivmnlNtcUrl">{{ state.scts.ivmnlNtcUrl }}</a>
      </td>
    </tr>
    <tr>
      <th class="left">증권신고서</th>
      <td class="left"><a href="javascript:void(0);">{{ state.scts.ipfsUrl }}</a></td>
      <th class="left">확정투자자명부 상태</th>
      
      <!-- 명부 조회 팝업 -->
      <td class="left">{{ state.dfnlvmn.sts }}<button type="button" class="mediumLine ml6">명부확인</button></td>
    </tr>
    <tr>
      <th class="left vaTop">청산증빙자료</th>
      <td class="left">
        <!--flPath + orgApflnm + xcrnm ???? -->
        <a v-for="document in state.sctsWrpt" :key="document.wrptSqno" :href="document.flPath">{{ document.orgApflnm }}</a><br />
      </td>
      <th class="left">청산대리인명</th>
      <td class="left">{{state.scts.lqdAgnt }}</td>
    </tr>
  </tbody>
</table>
</article>

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
        <th class="center">확정 투자자 수</th>
        <th class="center">승인 결과</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="institution in state.sctsFncorg" :key="institution.sctsItmC">
        <td class="center">{{ institution.fncorgNm }}</td>
        <td class="right">{{formatCurrency( institution.alcPucSctsQt) }} 주</td>
        <td class="right">{{ formatCurrency(institution.dfnIvmnPers ||0) }} 명</td>
        <td class="center">{{ institution.stscNm }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td class="center">합계</td>
        <td class="right">{{ formatCurrency(totalAlcPucSctsQt) }} 주</td>
        <td class="right">{{ formatCurrency(totalDfnIvmnPers) }} 명</td>
        <td class="center">&nbsp;</td>
      </tr>
    </tfoot>
  </table>
</article>

<footer class="bottomBtnArea" role="mainFooter">
  <button type="button" class="largeLine" @click="goBack">목록</button>
  <button type="button" class="large" @click="processApplication">처리</button>
  <button v-if="state.dczHst.rqDs === '발행취소'" type="button" class="large" @click="cancelIssuance">발행취소</button>
</footer>
<!-- 팝업 컴포넌트 -->
<rejectReasonInputPopup v-if="showRejectInputPopup" @close="showRejectInputPopup = false" />
<rejectReasonDetailPopup v-if="showRejectDetailPopup" @close="showRejectDetailPopup = false" />
<confirmedInvestorListPopup v-if="showInvestorListPopup" @close="showInvestorListPopup = false" />
</template>

<script setup>
import { ref, reactive, computed,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import securityTokenAdminApi from '@/assets/api/AdminApi.js';
import rejectReasonInputPopup from '@/components/popup/rejectReasonInputPopup.vue';
import rejectReasonDetailPopup from '@/components/popup/rejectReasonDetailPopup.vue';
import confirmedInvestorListPopup from '@/components/popup/confirmedInvestorListPopup.vue';
//import POPUP from '@/utils/popupSettings';

// Vue Router 설정
const router = useRouter()
const reqParam = useRoute()


// 팝업 상태 관리
const showRejectInputPopup = ref(false);
const showRejectDetailPopup = ref(false);
const showInvestorListPopup = ref(false);

// 상태 변수들
const state = reactive({
  // 신청 이력 (dczHst)
  dczHst: {
    rqDs: '',                // 신청 구분
    rqDsNm: '',                // 신청 구분
    pltfPrctm: '',           // 플랫폼 처리 시간
    stscMsg: '',             // 발행취소 사유
    rqrtm: '',               // 요청 시간
    stscNm: '',              // 상태 메시지
    stacNm: '',              // 상태 이름
    prctm: ''                // 처리 시간
  },

  // 발행인 정보 (pbcco)
  pbcco: {
    pbccoSqno: 0,            // 금융기관 시퀀스 번호
    pbccoNm: '',             // 회사명
    ceoNm: '',               // 대표자명
    bzno: '',                // 사업자 번호
    copno: ''                // 법인 등록 번호
  },

  // 토큰증권 정보 (scts)
  scts: {
    sctsItmNm: '',           // 토큰증권명
    sttNm: '',               // 증권 종류 이름
    sctsItmC: '',            // 종목 코드
    slMeth: '',              // 모집/매출 방법
    sctsQt: 0,               // 증권 수량
    parPr: 0,                // 액면가액
    slPr: 0,                 // 모집/매출가액
    slTam: 0,                // 모집/매출 총액
    sctsRptDt: '',           // 증권 신고일
    asgPrd: '',              // 배정(청약) 기간
    asgStdt: '',             // 청약 시작일
    asgEdt: '',              // 청약 종료일
    sbpNtfyDt: '',           // 청약 공고일
    asgNtfyDt: '',           // 배정 공고일
    asgDt: '',               // 배정 및 환불 공고일
    rghCntn: '',             // 권리 내용
    wrptNtcUrl: '',          // 증권 신고서 공시 URL
    ivmnlNtcUrl: '',         // 투자설명서 공시 URL
    coPbccoNm: '',           // 공동 발행사명
    coPbccoBzno: '',         // 공동 발행사 사업자 번호
    rgdId: '',               // 발행자 ID
    ipfsUrl: '',             // 증권신고서 정보 URL
    lqdAgnt: ''              // 청산 대리인명
  },

  // 배정대상자 유형별 공모대상 증권 수 (sctsAsgs)
  sctsAsgs: [
    {
      sctsItmC: '',           // 종목 코드
      asgObj: '',             // 배정 대상자 유형
      asgQt: 0,               // 배정 수량
      asgRto: 0,              // 배정 비율
      slTam: 0                // 모집/매출 총액
    }
  ],

  // 확정투자자 명부 (dfnlvmn)
  dfnlvmn: {
    sts: ''                   // 확정 투자자 명부 상태
  },

  // 청산 증빙자료 (sctsWrpt)
  sctsWrpt: [
    {
      orgApflnm: '',           // 원본 첨부파일명
      wrptTpcNm: '',           // 보고서 유형 이름
      wrptSqno: 0,             // 보고서 시퀀스
      wrptTpc: '',             // 보고서 유형 코드
      sctsItmC: '',            // 종목 코드
      rgdDt: '',               // 등록 날짜
      flPath: '',              // 파일 경로
      xcrnm: ''                // 파일 확장자
    }
  ],

  // 계좌관리기관 정보 (sctsFncorg)
  sctsFncorg: [
    {
      sctsItmC: '',            // 종목 코드
      fncorgC: '',             // 계좌관리기관 코드
      fncorgNm: '',            // 금융기관명
      dfnIvmnPers: 0,          // 확정 투자자 수
      alcPucSctsQt: 0,         // 할당 발행 토큰 수량
      stscNm: '',              // 승인 결과
      prctm: ''                // 승인 날짜
    }
  ]
});

const fetchTokens = async () => {
  try {
    const requestData = {
      fncorgSqno: reqParam.fncorgSqno ? reqParam.fncorgSqno : 5,
      sctsItmC: reqParam.query.sctsItmC,
      rqDs: reqParam.query.rqDs,
    };

    // API 호출
    const response = await securityTokenAdminApi.approvalProcessing.rqApvDetail(requestData);

    // 각 데이터가 undefined가 아니면 reactive 데이터에 할당
    state.dczHst = response.dczHst ;
    state.pbcco = response.pbcco;
    state.scts = response.scts;
    state.dfnlvmn = response.dfnlvmn;
    state.sctsAsgs = response.sctsAsgs;
    state.sctsFncorg = response.sctsFncorg ;
    state.sctsWrpt = response.sctsWrpt;

  } catch (error) {
    console.error('Error fetching application detail:', error);
  } finally {
    state.loading = false;  // 데이터 로딩 완료
  }
};

// 배정대상자 합계
//const totalAsgQt = state.sctsAsgs.reduce((sum, asg) => sum + asg.asgQt, 0); // 증권수
//const totalAsgRto = state.sctsAsgs.reduce((sum, asg) => sum + parseFloat(asg.asgRto), 0);; //배정비율
//const totalSlTam = state.sctsAsgs.reduce((sum, asg) => sum + asg.slTam, 0); // 모집(매출) 총액

const totalAsgQt = computed(() => state.sctsAsgs.reduce((sum, asg) => sum + asg.asgQt, 0));
const totalAsgRto = computed(() => state.sctsAsgs.reduce((sum, asg) => sum + parseFloat(asg.asgRto), 0));
const totalSlTam = computed(() => state.sctsAsgs.reduce((sum, asg) => sum + asg.slTam, 0));

//계좌기관정보 합계
const totalAlcPucSctsQt = computed(() => state.sctsFncorg.reduce((sum, fncorg) => sum + fncorg.alcPucSctsQt, 0)); // 할당 발행토큰 수량
const totalDfnIvmnPers = computed(() => state.sctsFncorg.reduce((sum, fncorg) => sum + fncorg.dfnIvmnPers, 0),0);   // 확정 투자자 수

// 금액 형식화 함수
const formatCurrency = (num) => num ? num.toLocaleString('ko-KR') : '0';

// const popupTest = () => {
//   POPUP.APPLICATIONAPPROVAL.APPROVE_CONFIRM(
//     () => console.log('아니오'),
//     () => console.log('예')
//   );
// };

// 목록으로 돌아가는 함수
const goBack = () => {
router.push({ name: 'approvalprocessingList' });
}

// 컴포넌트가 마운트될 때 실행할 함수

onMounted(() => {
  fetchTokens();
});
</script>

<style scoped>
/* Add your styles here */
</style>

<!-- Check List
미구현
1. 마찬가지로 파라메타가 따로 있는건지 아님 1과 동일한 변수가 있는지
   -> 이야기 해서 추가 할 예정입니다.
2.  명부확인 버튼
3. pltfPrctm 안넘어옴..
   -> 플랫폼 관리자가 신청승인 처리 했을 때 나옵니다
   -> 넘어오는거 확인될때 처리하겠습니다. ㅠ
4. 청산증빙자료 경로 이렇게 해야하는지 ? flPath + orgApflnm + xcrnm ????
  -> 이건 청산 신청까지 기능이 만들어지면 하는 것으로 ..
5. 청산대리인명은 어디서끌고오나여..
   -> 이건 청산 신청까지 기능이 만들어지면 그떄 붙이는 것으로..
6. 증권신고서 파람 없음 scts.ipfsUrl
   -> ipfs 기능 나오면 그때 붙이는 것으로...
7. 확정투자자수 파람 없음 sctsFncorg.dfnIvmnPers
   -> 확정투자자수 개발 완료 되면 붙이는 것으로..
8. 처리 상태 코드 어디서 가져오나여..최종승인으로 갈음 하나여
  -> 토큰증권 승인처리에 대한 상태 코드 말씀하시는거면, dczHst.stsc로 가져와야 될 것 같습니다.
-->