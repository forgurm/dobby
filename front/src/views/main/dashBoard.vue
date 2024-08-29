<template>
  <header role="mainHeader">
    <h1 class="ttl">Dashboard</h1>
  </header>

  <article role="contents" class="mb32">
    <!-- 봇 상태 -->
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">봇상태</p>
          <p class="right">
            <a href="javascript:void(0);" @click="goToPage('botList', {})">+ 더보기</a>
          </p>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 10%" />
            <col style="width: 60%" class="left"/>
            <col style="width: 30%" />
          </colgroup>
          <tbody>
            <tr v-for="(bot, index) in botData" :key="index">
              <th class="left pb16"></th>
              <td class="left pb16">
                <a href="javascript:void(0);" class="link">{{ bot.name || 'Unknown' }}</a>
              </td>
              <td class="left pb16">
                <span :class="getBotStatusClass(bot.status)">
                  {{ bot.status === 1 ? '동작' : '중지' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">회원목록</p>
          <p class="right">
            <a href="javascript:void(0);" @click="goToPage('members', {})">+ 더보기</a>
          </p>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 3%" />
            <col style="width: 65%" />
            <!--<col style="width: 42%" />-->
          </colgroup>
          <tbody>
            <tr v-for="(member, index) in memberData" :key="index">
              <th class="left pb16"></th>
              <td class="left pb16">
                <a href="javascript:void(0);" class="link">{{ member.name }}</a>가 회원가입
              </td>
              <!--<td class="right pb16">등록일: {{ member.registration_date | formatDate }}</td>-->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <article role="contents" class="mb80">
    <!-- 심볼 상태 -->
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">심볼 상태</p>
          <p class="right">
            <a href="javascript:void(0);" @click="goToPage('symbolList', {})">+ 더보기</a>
          </p>
        </div>
        <!-- BarChart 컴포넌트를 추가 -->
        <!--<BarChart :symbolData="symbolStatus" />-->
      </div>

      <!-- 심볼 리스트 -->
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">신규 심볼</p>
          <p class="right">
            <a href="javascript:void(0);" @click="goToPage('symbolList', {})">+ 더보기</a>
          </p>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 35%" />
            <col style="width: 40%" />
          </colgroup>
          <tbody>
            <tr v-for="(symbol, index) in symbolList" :key="index">
              <td class="left">{{ symbol.exchange_name }}</td>
              <td class="left">{{ symbol.exchange_code }}</td>
              <td class="left">{{ symbol.symbol_code }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import adminApi from '@/assets/api/AdminApi.js';
//import BarChart from '@/components/chart/BarChart.vue';
import { useRouter } from 'vue-router';
// 데이터 참조
const botData = ref([]);
const memberData = ref([]);
const symbolStatus = ref([]);  // 배열로 변경 (차트에 맞게)
const symbolList = ref([]);
const router = useRouter();

// 봇 데이터를 가져오는 함수
const fetchBotData = async () => {
  try {
    const response = await adminApi.main.botList({});
    if (Array.isArray(response.data)) {
      botData.value = response.data;
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.error('Error fetching bot data:', error);
  }
};

// 회원 목록 데이터 로드 함수
const fetchMemberData = async () => {
  try {
    const response = await adminApi.main.memberList({});
    if (Array.isArray(response.data)) {
      memberData.value = response.data;
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
};

// 심볼 상태 데이터 로드 함수
const fetchSymbolStatus = async () => {
  try {
    const response = await adminApi.main.symbolStatus({});
    if (Array.isArray(response.data)) {
      symbolStatus.value = response.data;  // 배열로 처리
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.error('Error fetching symbol status data:', error);
  }
};

// 심볼 리스트 데이터 로드 함수
const fetchSymbolList = async () => {
  try {
    const response = await adminApi.main.symbolList({});
    if (Array.isArray(response.data)) {
      symbolList.value = response.data;
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.error('Error fetching symbol list:', error);
  }
};

// 컴포넌트가 로드될 때 데이터를 로드
onMounted(() => {
  fetchBotData();
  fetchMemberData();
  fetchSymbolStatus();
  fetchSymbolList();
});

// 봇 상태에 따른 클래스 정의
const getBotStatusClass = (status) => {
  return status === 1 ? 'list labelYellow pd4-14' : 'list labelGray pd4-14';
};
// 상세 페이지 이동
const goToPage = (pageNm) => {
//const goToPage = (pageNm, params) => {
  try {
    // 페이지 이동 (query 방식)
    router.push({
      name: pageNm,
      query: {
        //fncorgC: params.fncorgSqno || '090', // fncorgSqno가 없을 경우 기본값으로 '090'을 사용
        //sctsItmC: params.sctsItmC
      }
    }).catch(err => {
      console.error('Error navigating to page:', err);
    });
  } catch (error) {
    console.error('Error in goToPage:', error);
  }
};

</script>