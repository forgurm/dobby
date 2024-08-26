<!-- 로그인 후 홈 -->
<template>
  <!-- <nav class="depth2 mb80">
    <a href="javascript:void(0);" class="current">종합</a>
    <a href="javascript:void(0);">발행인별</a>
    <a href="javascript:void(0);">계좌관리기과별</a>
  </nav> -->
  <header role="mainHeader">
    <h1 class="ttl">Dashboard</h1>
    <!--  -->
    <!-- start -->
    <!-- <div class="selectBox" style="width: 10%">
      <button type="button" class="bgWhite">선택해주세요.</button>
      <ul>
        <li>option name1</li>
        <li>option name2</li>
        <li>option name3</li>
      </ul>
    </div> -->
    <!-- end -->
  </header>

  <article role="contents" class="mb32">
    <!--//E:unitWrap-->

    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">봇상태</p>
          <p class="right">+ 더보기</p>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 10%" />
            <col style="width: 20%" />
            <col style="width: 35%" />
            <col style="width: 35%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left"></th>
              <td class="left">봇이름</td>
              <td class="left">봇상태</td>
              <td class="right">동작</td>
            </tr>
            <tr>
              <th class="left pb16"></th>
              <td class="left pb16">
                <a href="javascript:void(0);" class="link">회장님알람</a>
              </td>
              <td class="left pb16"><span class="list labelYellow pd4-14">동작</span></td>
              <td class="right pb16">2024.05.23</td>
            </tr>
            <tr>
              <th class="left pb16"></th>
              <td class="left pb16">
                <a href="javascript:void(0);" class="link">30분쥬겅</a>
              </td>
              <td class="left pb16"><span class="list labelGreen pd4-14">중지</span></td>
              <td class="right pb16">2024.05.23</td>
            </tr>
            <tr>
              <th class="left"></th>
              <td class="left"><a href="javascript:void(0);" class="link">30분살령</a></td>
              <td class="left"><span class="list labelGray pd4-14">폐기</span></td>
              <td class="right">2024.05.23</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">회원목록</p>
          <p class="right">+ 더보기</p>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 3%" />
            <col style="width: 65%" />
            <col style="width: 42%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left pb16"><button type="button" class="notiDel"></button></th>
              <td class="left pb16">
                <a href="" class="link">아무개</a>가 회원가입
              </td>
              <td class="right pb16">2024.05.23</td>
            </tr>
            <tr>
              <th class="left pb16"><button type="button" class="notiDel"></button></th>
              <td class="left pb16">
                <a href="" class="link">김개똥</a>가 회원탈퇴
              </td>
              <td class="right pb16">2024.05.23</td>
            </tr>
            <tr>
              <th class="left"><button type="button" class="notiDel"></button></th>
              <td class="left">
                <a href="" class="link">홍길동</a>가 {등급업}으로 변경
              </td>
              <td class="right">2024.05.23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <article role="contents" class="mb80">
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">심볼 상태</p>
          <p class="right">+ 더보기</p>
        </div>
        <div class="cardDetailWrap">
          <div class="left">
            <section role="graph">
              <div class="graphWrap">
                <div class="graph"></div>
              </div>
              <div class="graphLeft">
                <div class="selectBox">
                  <button type="button">2024년</button>
                  <ul>
                    <li>2023년</li>
                    <li>2022년</li>
                    <li>20212년</li>
                  </ul>
                </div>
                <div class="legend">
                  <div class="labelWrap vertical">
                    <span class="legend led1 box mb20"
                      >발행
                      <p>5</p>
                      건</span
                    >
                    <span class="legend led2 box mb20"
                      >배정
                      <p>3</p>
                      건</span
                    >
                    <span class="legend led3 box"
                      >청산
                      <p>1</p>
                      건</span
                    >
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="right">
            <div class="tab left mb40">
              <div class="tabWrap">
                <!-- Bind the class and click event to update the active tab -->
                <button 
                  class="tokenTab" 
                  :class="{ current: activeTab === 0 }" 
                  @click="setActiveTab(0)"
                >바이낸스 2</button>
              
                <button 
                  class="tokenTab" 
                  :class="{ current: activeTab === 1 }" 
                  @click="setActiveTab(1)"
                >바이비트 0</button>
              
                <button 
                  class="tokenTab" 
                  :class="{ current: activeTab === 2 }" 
                  @click="setActiveTab(2)"
                >비트겟 1</button>
              
                <button 
                  class="tokenTab" 
                  :class="{ current: activeTab === 3 }" 
                  @click="setActiveTab(3)"
                >오케이엑스 1</button>
              </div>
            </div>
            <table class="con noline">
              <colgroup>
                <col style="width: 25%" />
                <col style="width: 50%" />
                <col style="width: 25%" />
                
              </colgroup>
              <tbody>
                <tr>
                  <td class="left">심볼명</td>
                  <td class="left">심볼코드</td>
                  <td class="right">등록일</td>
                </tr>
                <tr>
                  <td class="left"><a href="">None</a></td>
                  <td class="left">SUN</td>
                  <td class="right">2024.05.23</td>
                </tr>
                <tr>
                  <td class="left"><a href="">None</a></td>
                  <td class="left">Alphaca</td>
                  <td class="right">2024.05.23</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </article>

  <article role="contents" class="mb32">
    <hgroup class="ttl">
      <h3 class="ttl">전체 누적현황</h3>
    </hgroup>
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <div class="manigingIssuer"></div>
          <h2>관리발행인</h2>
        </div>
        <table class="con">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left emphasize mb16">2024 신규</th>
              <td class="right emphasize mainColor mb16">3</td>
            </tr>
            <tr>
              <th class="left dark">누적</th>
              <td class="right">4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <div class="issue"></div>
          <h2>발행종목</h2>
        </div>
        <table class="con">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left emphasize">2024 신규</th>
              <td class="right emphasize mainColor">3</td>
            </tr>
            <tr>
              <th class="left">누적</th>
              <td class="right">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <article role="contents" class="mb32">
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <div class="tokenNumber"></div>
          <h2>토큰수</h2>
        </div>
        <table class="con">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left emphasize">2024 신규</th>
              <td class="right emphasize mainColor">1,000,000</td>
            </tr>
            <tr>
              <th class="left">누적</th>
              <td class="right">4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <div class="solicitationSales"></div>
          <h2>모집매출액</h2>
        </div>
        <table class="con">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left emphasize">2024 신규</th>
              <td class="right emphasize mainColor">7,777,777,777</td>
            </tr>
            <tr>
              <th class="left">누적</th>
              <td class="right">8,999,999,999</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <div class="investor"></div>
          <h2>투자자</h2>
        </div>
        <table class="con">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left emphasize">2024 신규</th>
              <td class="right emphasize mainColor">3,000,000</td>
            </tr>
            <tr>
              <th class="left">누적</th>
              <td class="right">4,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <article role="contents" class="mb80">
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb24">
          <p class="left">일정안내</p>
        </div>
        <div class="cardDetailWrap">
          <div class="left center">
            <div class="fullCalendar">
              <!-- 월 header -->
              <div class="header">
                <p>{{ month }}월</p>
              </div>
              <!-- 일 ~ 토 영역 -->
              <div class="dayofWeek">
                <span>
                  <p>일</p>
                  <p>월</p>
                  <p>화</p>
                  <p>수</p>
                  <p>목</p>
                  <p>금</p>
                  <p>토</p>
                </span>
              </div>
              <!-- 1 ~ 30일 영역 -->
              <div class="contents">
                <p
                  v-for="(lists, index) in dates"
                  :key="index"
                  :class="classFunction(lists)"
                  @click="calendarClick(lists)"
                >
                  {{ lists.date }}
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="tab center mb40">
              <button class="detailCal">상세일정</button>
            </div>
            <table class="con noline">
              <colgroup>
                <col style="width: 25%" />
                <col style="width: 25%" />
                <col style="width: 25%" />
                <col style="width: 25%" />
              </colgroup>
              <tbody v-if="detailInfo">
                <tr>
                  <td class="center">일자</td>
                  <td class="center">일정구분</td>
                  <td class="center">종목코드</td>
                  <td class="center">발행인</td>
                </tr>
                <tr>
                  <td class="center">{{ detailInfo.date }}</td>
                  <td class="center">{{ detailInfo.dateInfo }}</td>
                  <td class="center">
                    <a href="javascript:void(0);">{{ detailInfo.stCode }}</a>
                  </td>
                  <td class="center">{{ detailInfo.companyNm }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </article>

  <article role="contents" class="mb80">
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb32">
          <h2>공지사항</h2>
          <h2>+ 더보기</h2>
        </div>
        <table class="con noline">
          <colgroup>
            <col style="width: 50%" />
            <col style="width: 50%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left">제목</th>
              <td class="right">작성일</td>
            </tr>
            <tr>
              <td class="left">
                <a href="javascript:void(0);">위험등급 신청방식 안내입니다.</a>
              </td>
              <td class="right">2024.05.23</td>
            </tr>
            <tr>
              <td class="left"><a href="javascript:void(0);">공지사항입니다.</a></td>
              <td class="right">2024.05.20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <article role="contents" title="모집규모별 발행현황">
    <h3 class="ttl">모집규모별 발행현황</h3>
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb16">
          <p></p>
          <p class="right">+ 더보기</p>
        </div>
        <div class="legend">
          <span class="legend led3 box">투자자</span>
          <span class="legend led2 box">모집(매출)총액</span>
          <span class="legend led1 line">발행건수</span>
          <span class="legend led7 line">발행인(회사)수</span>
        </div>
        <section role="graph">
          <div class="graphWrap"></div>
        </section>
        <p class="cautionBlue">*누적 발행토큰증권 정보입니다.</p>
        <!--//E:legend-->
      </div>
    </div>
  </article>

  <article role="contents" title="계좌관리기관별 총 발행실적">
    <h3 class="ttl">계좌관리기관별 총 발행실적</h3>
    <div class="cardListWrap2">
      <div class="cardList mainCard pb32">
        <div class="cardListHead mb16">
          <p></p>
          <p class="right">+ 더보기</p>
        </div>
        <div class="legend">
          <span class="legend led3 box">투자자</span>
          <span class="legend led2 box">모집(매출)총액</span>
          <span class="legend led1 line">발행건수</span>
          <span class="legend led7 line">발행인(회사)수</span>
        </div>
        <section role="graph">
          <div class="graphWrap"></div>
        </section>
        <p class="cautionBlue">*누적 발행토큰증권 정보입니다.</p>
        <!--//E:legend-->
      </div>
    </div>
  </article>

  <!--전자지갑 생성안내 팝업-->
  <div
    class="popup"
    style="width: 36rem; height: 24.2rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <button class="close"></button>
    <h1>전자지갑 생성안내</h1>
    <div class="subscription">
      <p style="height: 6.6rem">
        전자지갑 생성 후 플랫폼 이용이 가능합니다.
        <br />
        [전자지갑생성]버튼을 눌러 지갑생성을 진행해 주세요.
        <br />
        생성진행 중에는 화면을 이탈하지 마세요.
      </p>
    </div>
    <div class="btnArea">
      <button type="button" onclick="">전자지갑 생성</button>
    </div>
  </div>

  <!--전자지갑 생성완료 팝업-->
  <div
    class="popup"
    style="width: 36rem; height: 30.4rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <button class="close"></button>
    <h1>전자지갑 생성완료</h1>
    <div class="subscription">
      <p class="mb20">
        전자지갑 생성되었습니다.
        <br />
        마이페이지에서도 전자지갑주소를 확인할 수 있습니다.
      </p>
    </div>
    <div class="contents">
      <p class="mb20 center">전자지갑주소</p>
      <p class="Emphasize center">1Lbcfr7sATHD9CgdQo3HTMTkV8LK42nX71</p>
    </div>

    <div class="btnArea">
      <button type="button" onclick="">확인</button>
    </div>
  </div>

  <!--전자지갑 생성오류 팝업-->
  <div
    class="popup"
    style="width: 36rem; height: 24.2rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <button class="close"></button>
    <h1>전자지갑 생성안내</h1>
    <div class="subscription">
      <p class="mb20">
        전자지갑생성 중 오류가 생겼습니다.
        <br />
        다시 진행해 주세요.
        <br />
        계속 오류가 생길 경우 플랫폼운영자에게 문의주세요.
      </p>
    </div>
    <div class="btnArea">
      <button type="button" onclick="">재시도</button>
    </div>
  </div>

  <!--전자문서 로딩 팝업-->
  <div
    class="popup"
    style="width: 36rem; height: 20.2rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <div class="loadingBarWrap mb20">
      <div class="loaidngBar"></div>
    </div>
    <div class="subscription">
      <p class="center mb8">전자지갑을 만들고 있어요.</p>
      <p class="center grey">잠시만 기다려 주세요.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import AdminApi from '@/assets/api/AdminApi.js';
const dates = ref([])
const month = ref('')
const detailInfo = ref('')

// Active tab logic
const activeTab = ref(0)

const setActiveTab = (index) => {
  activeTab.value = index
}

// Example: Fetch bot data and calendar data from back-end
const botData = ref([])
const calendarData = ref([])

const fetchBotData = async () => {
  try {
    const response = await axios.get('/api/bots');  // Adjust URL to match your backend route
    botData.value = response.data;
  } catch (error) {
    console.error("Error fetching bot data:", error);
  }
}

const fetchCalendarData = async () => {
  try {
    const response = await axios.get('/api/calendar');  // Adjust URL to match your backend route
    calendarData.value = response.data;
    dateFunction(calendarData.value); // Pass calendar data to dateFunction
  } catch (error) {
    console.error("Error fetching calendar data:", error);
  }
}

const dateFunction = (calendarData) => {
  const prevDates = []
  const nextDates = []
  const thisDates = []

  const date = new Date()
  month.value = date.getMonth() + 1

  const prevLast = new Date(date.getFullYear(), month.value - 1, 0)
  const thisLast = new Date(date.getFullYear(), month.value, 0)

  const pLdate = prevLast.getDate()
  const pLday = prevLast.getDay()
  const tLdate = thisLast.getDate()
  const tLday = thisLast.getDay()

  for (let i = 1; i <= tLdate; i++) {
    thisDates.push({ date: i, prev: false, next: false, click: false })
  }

  if (pLday !== 6) {
    for (let i = 0; i <= pLday; i++) {
      prevDates.unshift({ date: pLdate - i, prev: true, next: false, click: false })
    }
  }

  for (let i = 1; i <= 6 - tLday; i++) {
    nextDates.push({ date: i, prev: false, next: true, click: false })
  }

  dates.value = prevDates.concat(thisDates, nextDates)

  // Update calendar dates with fetched data
  for (const item of calendarData) {
    const foundDate = dates.value.find(d => d.date === new Date(item.date).getDate())
    if (foundDate) {
      foundDate.info = item
    }
  }
}

const classFunction = (data) => {
  let arrayTemp = []
  if (data.prev) arrayTemp.push('prev')
  if (data.next) arrayTemp.push('next')
  if (data.click) arrayTemp.push('current')
  if (data.info) arrayTemp.push('data')
  return arrayTemp.join(' ')
}

const calendarClick = (lists) => {
  dates.value.forEach((data) => (data.click = false))
  if (lists.info) lists.click = true
  detailInfo.value = lists.info
}

onMounted(() => {
  fetchBotData();
  fetchCalendarData();
})
</script>

<style></style>
