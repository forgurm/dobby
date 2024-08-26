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
                    <span class="legend led1 box mb20">
                      발행<p>5</p>건
                    </span>
                    <span class="legend led2 box mb20">
                      배정<p>3</p>건
                    </span>
                    <span class="legend led3 box">
                      청산<p>1</p>건
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="right">
            <div class="tab left mb40">
              <div class="tabWrap">
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
</template>

<script setup>
import { onMounted, ref } from 'vue'; // `ref`를 `import`합니다.
import AdminApi from '@/assets/api/AdminApi.js'; 

// Active tab logic
const activeTab = ref(0); // ref 선언

const setActiveTab = (index) => {
  activeTab.value = index;
};

// 봇 데이터 로드 로직
const botData = ref([]); // ref 선언

const fetchBotData = async () => {
  try {
    const response = await AdminApi.main.Dashboard();
    botData.value = response.data; // ref 변수에 데이터를 저장
  } catch (error) {
    console.error("Error fetching bot data:", error);
  }
};

onMounted(() => {
  fetchBotData();
});
</script>

<style>
/* 스타일 추가 */
</style>