<!-- 토큰증권승인처리 > 목록 조회 -->
<template>
  <header role="mainHeader">
    <h1 class="ttl">토큰증권 승인처리</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;토큰증권 승인처리</a>
    </nav>
  </header>

  <article role="contents" class="mb40" title="검색 테이블">
    <div class="search w100">
      <table>
        <colgroup>
          <col style="width: 6%" />
          <col style="width: 44%" />
          <col style="width: 6%" />
          <col style="width: 44%" />
        </colgroup>
        <tbody>
          <tr>
            <th>신청구분</th>
            <td>
              <div class="selectBox w200">
                <button type="button" @click="selectOn('rqDs')">{{ state.search.selectedSort}}</button>
                <ul v-if="state.option.dropdownVisible">
                  <li v-for="option in state.rqdsOptions" :key="option.value" @click="selectOptionRqDs(option)">
                    {{ option.text }}
                  </li>
                </ul>
              </div>
            </td>
            <th>토큰증권상태</th>
            <td>
              <div class="selectBox w200">
                <button type="button" @click="selectOn('sts')">{{ state.search.selectedSts }}</button>
                <ul v-if="state.option.dropdownVisibleSts">
                  <li v-for="option in state.stsOptions" :key="option.value" @click="selectOptionSts(option)">
                    {{ option.text }}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th>검색어</th>
            <td colspan="3">
              <div class="selectBox w200">
                <button type="button" @click="selectOn('srchwd')">{{ state.search.selectedsrchwd }}</button>
                <ul v-if="state.option.dropdownVisiblesrchwd">
                  <li v-for="option in state.srchwdOptions" :key="option.value" @click="selectOptionsrchwd(option)">
                    {{ option.text }}
                  </li>
                </ul>
              </div>
              <label class="edit ml8" style="width: 44.4rem">
                <input type="text" class="w100 left" placeholder="검색어 입력" v-model="state.searchParams.srchwdItem" />
                <button type="button" class="del" @click="clearSearchParam('srchwdItem')"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th>조회기간</th>
            <td colspan="3">
              <div class="selectBox w200">
                <button type="button" @click="selectOn('inqmc')">{{ state.search.selectedInqmc}}</button>
                <ul v-if="state.option.dropdownVisibleInqmc">
                  <li v-for="option in state.inqmcOptions" :key="option.value" @click="selectOptionInqmc(option)">
                    {{ option.text }}
                  </li>
                </ul>
              </div>
              <div class="datePickerWrap ml8">
                <DatePicker
                  v-model="state.searchParams.prdSt"
                  format="yyyy-MM-dd"
                  :ui="{
                    input: 'custom-input',
                    inputWrapper: 'custom-wrapper',
                    calendarWrapper: 'custom-calendar-wrapper'
                  }"
                  placeholder="yyyy-MM-dd"
                  locale="ko"
                  :disableTime="true"
                  :autoApply="true"
                >
                  <template #input-icon>
                    <div class="input-slot-image"></div>
                  </template>
                </DatePicker>
              </div>
              &nbsp;~&nbsp;
              <div class="datePickerWrap ml8">
                <DatePicker
                  v-model="state.searchParams.prdEd"
                  format="yyyy-MM-dd"
                  :ui="{
                    input: 'custom-input',
                    inputWrapper: 'custom-wrapper',
                    calendarWrapper: 'custom-calendar-wrapper'
                  }"
                  placeholder="yyyy-MM-dd"
                  locale="ko"
                  :disableTime="true"
                  :autoApply="true"
                >
                  <template #input-icon>
                    <div class="input-slot-image"></div>
                  </template>
                </DatePicker>
              </div>
              <span class="inline ml8">*최대 1년 조회 가능합니다.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="searchBtnArea">
      <button type="button" class="smallLine" @click="resetSearchParams">초기화</button>
      <button type="button" class="small" @click="fetchTokens">조회</button>
    </div>
  </article>

  <article role="contents" >
    <div class="unitWrap">
      <div class="unit">총 <span>{{ state.pagination.totalElements }}</span>개</div>
    </div>

    <table class="vertical type2">
      <colgroup>
        <col style="width: 4%" />
        <col style="width: 6%" />
        <col style="width: 16%" />
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 10%" />
        <col style="width: 6%" />
        <col style="width: 6%" />
        <col style="width: 6%" />
        <col style="width: 6%" />
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>신청구분</th>
          <th>발행인(회사명)</th>
          <th>종목코드</th>
          <th>총 발행수량</th>
          <th>배정기간</th>
          <th>배정공고일</th>
          <th>토큰증권상태</th>
          <th>신청일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in state.approvalProcessingList" :key="index.sctsItmC">
          <td class="center">{{ application.no }}</td>
          <td class="center">{{ application.rqDsNm }}</td>
          <td class="center">
            <a href="javascript:void(0);" @click.stop="goToPage('currentSituationPublisherDetail', { pbccoSqno: application.pbccoSqno })">
              {{ application.pbccoNm }}
            </a>
          </td>
          <td class="center">
            <a href="javascript:void(0);" @click.stop="goToPage('approvalProcessingDetail', application)" :title="application.sctsItmNm">
              {{ application.sctsItmC }}
            </a>
          </td>
          <td class="center">{{ application.sctsQt }}</td>
          <td class="center">{{ application.asgPrd }}</td>
          <td class="center">{{ application.asgNtfyDt }}</td>
          <td class="center">{{ application.stscNm }}</td>
          <td class="center">{{ application.rqrtm }}</td>
        </tr>
        <tr v-if="state.approvalProcessingList.length === 0">
          <td class="center grey" colspan="9">일치하는 검색결과가 없습니다.</td>
        </tr>
      </tbody>
    </table>

    <nav class="page w100">
      <button type="button" class="first" @click="changePage(1)"></button>
      <button type="button" class="prev" @click="changePage(state.pagination.currentPage - 1)"></button>
      <a v-for="page in totalPagesArray" :key="page" href="javascript:void(0);" @click="changePage(page)" :class="{ current: page === state.pagination.currentPage }">{{ page }}</a>
      <button type="button" class="next" @click="changePage(state.pagination.currentPage + 1)"></button>
      <button type="button" class="last" @click="changePage(state.pagination.totalPages)"></button>
    </nav>
  </article>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import securityTokenAdminApi from '@/assets/api/adminApi.js';

// Vue Router 설정
const router = useRouter()

// 날짜 계산 함수
const getCurrentDate = () => new Date()
const getOneYearAgoDate = () => {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 1) // 1년 전 날짜 계산
  return date
}

// 상태 변수들
const state = reactive({
  approvalProcessingList: [],
  search: {
    selectedSort: '',
    selectedSts: '',
    selectedsrchwd: '',
    selectedInqmc: ''
  },
  pagination: {
    totalElements: 0,
    totalPages: 1,
    currentPage: 1
  },
  option: {
    dropdownVisible: false,
    dropdownVisibleSts: false,
    dropdownVisiblesrchwd: false,
    dropdownVisibleInqmc: false
  },
  rqdsOptions: [],
  stsOptions: [],
  srchwdOptions: [],
  inqmcOptions: [],
  searchParams: {
    fncorgSqno: 5,
    rqDs: '',
    sts: '',    
    srchwd: '',
    inqmc: 'RQDT_MN',
    srchwdItem: '',
    prdSt: getOneYearAgoDate(), 
    prdEd: getCurrentDate(),    
    sort: 'asc',
    pageNum: 1
  },
  errorClass: {
    scts: {
      sttNmList: ''
    }
  }
})

/**
 * 
 * 버튼 및 이벤트 관련 함수
 */
// [1. 신청구분 옵션] 함수
const fetchRqDsOptions = async () => {
  try {
    const requestData = { firstCode: 'RQ_DS' };
    const response = await securityTokenAdminApi.commonCode.siteAmnComnC(requestData);

    if (response.data && response.data.list) {
      // 옵션 리스트를 설정
      state.rqdsOptions = response.data.list.map(option => ({
        text: option.comnDtlcNm,
        value: option.comnDtlc
      }));

      // 첫 번째 옵션을 기본값으로 설정
      if (state.rqdsOptions.length > 0) {
        state.search.selectedSort = state.rqdsOptions[0].text;  // 기본값 설정
        state.searchParams.rqDs = state.rqdsOptions[0].value;   // 기본 선택된 값
      }

      //console.log('fetchSortOptions success:', state.sortOptions);
    } else {
      console.error('fetchSortOptions Invalid response format:', response);
    }
  } catch (error) {
    console.error('fetchSortOptions Error fetching sort options:', error, error.response ? error.response.data : '');
  }
};
// [2. 토큰증권상태 옵션] 함수
const fetchStsOptions = async () => {
  try {
    const requestData = { firstCode: 'STS' };
    const response = await securityTokenAdminApi.commonCode.siteAmnComnC(requestData);
    
    if (response.data && response.data.list) {
      state.stsOptions = response.data.list.map(option => ({
        text: option.comnDtlcNm,
        value: option.comnDtlc
      }));
      
      // 첫 번째 옵션을 기본값으로 설정
      if (state.stsOptions.length > 0) {
        state.search.selectedSts = state.stsOptions[0].text;  // 기본값 설정
        state.searchParams.sts = state.stsOptions[0].value;   // 기본 선택된 값
      }

      //console.log('fetchApvRztOptions success:', state.apvRztOptions);
    } else {
      console.error('fetchStsOptions Invalid response format:', response);
    }
  } catch (error) {
    console.error('fetcStsOptions Error fetching period options:', error, error.response ? error.response.data : '');
  }
};

// [3.검색어] 함수
const fetchSrcOptions = async () => {
  try {
    const requestData = { firstCode: 'SRCHWD' };
    const response = await securityTokenAdminApi.commonCode.siteAmnComnC(requestData);
    
    if (response.data && response.data.list) {
      state.srchwdOptions = response.data.list.map(option => ({
        text: option.comnDtlcNm,
        value: option.comnDtlc
      }));
      
      // 첫 번째 옵션을 기본값으로 설정
      if (state.srchwdOptions.length > 0) {
        state.search.selectedsrchwd = state.srchwdOptions[0].text;  // 기본값 설정
        state.searchParams.srchwd = state.srchwdOptions[0].value;   // 기본 선택된 값
      }

      //console.log('fetchSrchwdOptions success:', state.srchwdOptions);
    } else {
      console.error('fetchSrchwdOptions Invalid response format:', response);
    }
  } catch (error) {
    console.error('fetchSrchwdOptions Error fetching period options:', error, error.response ? error.response.data : '');
  }
};

// [4. 조회기간 옵션] 함수
const fetchInqmcOptions = async () => {
  try {
    const requestData = { firstCode: 'INQMC' };
    const response = await securityTokenAdminApi.commonCode.siteAmnComnC(requestData);
    
    if (response.data && response.data.list) {
      state.inqmcOptions = response.data.list.map(option => ({
        text: option.comnDtlcNm,
        value: option.comnDtlc
      }));
      
      // 첫 번째 옵션을 기본값으로 설정
      if (state.inqmcOptions.length > 0) {
        state.search.selectedInqmc = state.inqmcOptions[0].text;  // 기본값 설정
        state.searchParams.inqmc = state.inqmcOptions[0].value;       // 기본 선택된 값
      }

      //console.log('fetchInqmcOptions success:', state.inqmcOptions);
    } else {
      console.error('fetchinqmcOptions Invalid response format:', response);
    }
  } catch (error) {
    console.error('fetchInqmcOptions Error fetching period options:', error, error.response ? error.response.data : '');
  }
};

// 드롭다운 토글 함수
const selectOn = (type) => {
  if (type === 'rqDs') {
    state.option.dropdownVisible = !state.option.dropdownVisible
  } else if (type === 'sts') {
    state.option.dropdownVisibleSts = !state.option.dropdownVisibleSts
  } else if (type === 'srchwd') {
    state.option.dropdownVisiblesrchwd = !state.option.dropdownVisiblesrchwd
  } else if (type === 'inqmc') {
    state.option.dropdownVisibleInqmc = !state.option.dropdownVisibleInqmc
  }
}

// 신청구분 옵션 선택 함수
const selectOptionRqDs = (option) => {
  state.search.selectedSort = option.text
  state.searchParams.rqDs = option.value
  state.option.dropdownVisible = false
}

// 토큰증권상태 옵션 선택 함수
const selectOptionSts = (option) => {
  state.search.selectedSts = option.text
  state.searchParams.sts = option.value
  state.option.dropdownVisibleSts = false
}

// 검색 키 옵션 선택 함수
const selectOptionsrchwd = (option) => {
  state.search.selectedsrchwd = option.text
  state.searchParams.srchwd = option.value
  state.option.dropdownVisiblesrchwd = false
}

// 기간 옵션 선택 함수
const selectOptionInqmc = (option) => {
  state.search.selectedInqmc = option.text
  state.searchParams.inqmc = option.value
  state.option.dropdownVisibleInqmc = false
}

// 특정 검색 파라미터를 초기화하는 함수
const clearSearchParam = (field) => {
  state.searchParams[field] = ''
}

// 조회 데이터 리퀘스트 함수
const fetchTokens = async () => {
  try {
    const requestData = {
      fncorgSqno: state.searchParams.fncorgSqno,
      inqmc: state.searchParams.inqmc,
      inqmcSt: state.searchParams.prdSt ? state.searchParams.prdSt.toISOString().slice(0, 10).replace(/-/g, '') : '',
      inqmcEd: state.searchParams.prdEd ? state.searchParams.prdEd.toISOString().slice(0, 10).replace(/-/g, '') : '',
      pageNum: state.searchParams.pageNum,
      rqDs: state.searchParams.rqDs,
      sort: state.searchParams.sort,
      srchwd: state.searchParams.srchwd,
      srchwdItem: state.searchParams.srchwdItem,
    };
    const response = await securityTokenAdminApi.approvalProcessing.rqApvList(requestData)
    console.log('resData :',response)
    if (response && response.data && response.data.contents) {
      state.approvalProcessingList = response.data.contents;
      state.pagination.totalElements = response.data.totalElements ||0;
      state.pagination.totalPages = response.data.totalPages ||1;
    } else {
      console.error('fetchTokens: Invalid response structure:', response);
    }
  } catch (error) {
    console.error('fetchTokens Error fetching token security applications:', error, error.response ? error.response.data : '')
  }
}

// [6. 초기화] 버튼 함수
const resetSearchParams = () => {
  Object.assign(state.searchParams, {
    fncorgC: 5,
    rqDs: state.rqdsOptions.length > 0 ? state.rqdsOptions[0].value : '', // 신청구분 기본값
    sts: state.stsOptions.length > 0 ? state.stsOptions[0].value : '', // 승인결과 기본값
    srchwd: state.srchwdOptions.length > 0 ? state.srchwdOptions[0].value : '', // 검색어 기본값
    srchwdItem: '',
    inqmc: state.selectedInqmc.length > 0 ? state.selectedInqmc[0].value : '',  // 기본 기간 옵션
    prdSt: getOneYearAgoDate(),
    prdEd: getCurrentDate(),
    pageNum: 1
  });

  // 기본 선택 텍스트도 설정
  state.search.selectedSort = state.rqdsOptions.length > 0 ? state.rqdsOptions[0].text : '';
  state.search.selectedSts = state.stsOptions.length > 0 ? state.stsOptions[0].text : '';
  state.search.selectedsrchwd = state.srchwdOptions.length > 0 ? state.srchwdOptions[0].text : '';
  state.search.selectedInqmc = state.inqmcOptions.length > 0 ? state.inqmcOptions[0].text : '';

  // 데이터 다시 조회
  fetchTokens();
};

// 페이지 변경 함수
const changePage = (page) => {
  if (page >= 1 && page <= state.pagination.totalPages) {
    state.pagination.currentPage = page
    state.searchParams.pageNum = page
    fetchTokens()
  }
}

// 페이지 이동
const goToPage = (pageNm, params) => {
  try {
    
    // 필요한 파라미터만 추출하고, fncorgSqno를 숫자로 변환
    const requiredParams = {
      fncorgSqno: Number(params.fncorgSqno) || 5, // 숫자로 변환
      sctsItmC: params.sctsItmC,
      rqDs: params.rqDs
    };

    // 페이지 이동 (query 방식)
    router.push({ name: pageNm, query: requiredParams }).catch(err => {
      console.error('Error navigating to page:', err);
    });
  } catch (error) {
    console.error('Error in goToPage:', error);
  }
};

// 페이지 배열 계산 함수
const totalPagesArray = computed(() => {
  return Array.from({ length: state.pagination.totalPages }, (v, k) => k + 1)
})

// 컴포넌트가 마운트될 때 실행할 함수들
onMounted(() => {
  
  fetchRqDsOptions(); // 신청구분 옵션 조회
  fetchInqmcOptions();  // 조회기간 옵션 조회
  fetchStsOptions(); // 토큰증권 상태 옵션 조회
  fetchSrcOptions(); // 검색어 옵션 조회
  fetchTokens();      // 목록데이터 조회
// onMounted(async () => {
//   try {
//     await Promise.all([
//        fetchSortOptions(); // 신청구분 옵션 조회
//        fetchInqmcOptions();  // 조회기간 옵션 조회
//        fetchStsOptions(); // 토큰증권 상태 옵션 조회
//        fetchSrcOptions(); // 검색어 옵션 조회
//     ]);
//     fetchTokens();
//   } catch (error) {
//     console.error('Error during API calls:', error);
//   }
// });

})
</script>

<style scoped>
/* Add your styles here */
</style>

<!-- Check List
미구현
1. 툴팁 안먹힘


확인 후 처리
1. 페이징 처리 안됨

-->