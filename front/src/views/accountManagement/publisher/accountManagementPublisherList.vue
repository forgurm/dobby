<!-- 홈 > 계정관리 > 발행인 -->
<template>
  <main role="main" title="계정관리-발행인">
    <header role="mainHeader">
      <h1 class="ttl">발행인</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;발행인</a>
      </nav>
    </header>

    <article role="contents" class="mb40" title="검색 테이블">
      <div class="search w100">
        <table>
          <colgroup>
            <col style="width: 12%" />
            <col style="width: 38%" />
            <col style="width: 12%" />
            <col style="width: 38%" />
          </colgroup>
          <tbody>
            <tr>
              <th>검색어</th>
              <td colspan="3">
                <div class="selectBox w200">
                  <!-- 공통 코드 api 데이터 가져와서 뿌려줌 -->
                  <button type="button">전체</button>
                  <!-- 위 버튼영역이 클릭 되었을 때, ul 영역 보이도록 처리 -->
                  <ul>
                    <!-- li 영역 클릭 되었을 때, ul 영역 숨김 처리 필요 -->
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div>
                <!--//E:selectBox-->
                <label class="edit ml8" style="width: 35.4rem">
                  <input type="text" class="w100 left" placeholder="검색어 입력" />
                  <button type="button" class="del"></button>
                </label>
              </td>
            </tr>
            <tr>
              <th>조회기간</th>
              <td colspan="3">
                <div class="selectBox w200">
                  <!-- 공통 코드 api 데이터 가져와서 뿌려줌 -->
                  <button type="button">신청일자</button>
                  <!-- 위 버튼영역이 클릭 되었을 때, ul 영역 보이도록 처리 -->
                  <ul>
                    <!-- li 영역 클릭 되었을 때, ul 영역 숨김 처리 필요 -->
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div>
                <!--//E:selectBox-->
                <div class="datePickerWrap ml8">
                  <!-- v-model을 활용해 data를 가져옴 -->
                  <!-- :ui="{
                      input: `sctsPrtDt ${errorClass.stInfo.sctsPrtDt === 'error' ? 'required' : ''}`
                    }" validation 통과 못하였을 때, style-binding을 활용해 적용 -->
                  <DatePicker
                    placeholder="YYYY-MM-DD"
                    format="yyyy-MM-dd"
                    locale="ko"
                    monthNameFormat="short"
                    :monthChangeOnScroll="false"
                    :enableTimePicker="false"
                    autoApply
                  >
                    <!-- datepicker 안 이미지 적용하고 위해 template 생성 -->
                    <template #input-icon>
                      <div class="input-slot-image"></div>
                    </template>
                  </DatePicker>
                </div>
                <!--//E:datePickerWrap-->
                &nbsp;~&nbsp;
                <div class="datePickerWrap ml8">
                  <!-- v-model을 활용해 data를 가져옴 -->
                  <!-- :ui="{
                      input: `sctsPrtDt ${errorClass.stInfo.sctsPrtDt === 'error' ? 'required' : ''}`
                    }" validation 통과 못하였을 때, style-binding을 활용해 적용 -->
                  <DatePicker
                    placeholder="YYYY-MM-DD"
                    format="yyyy-MM-dd"
                    locale="ko"
                    monthNameFormat="short"
                    :monthChangeOnScroll="false"
                    :enableTimePicker="false"
                    autoApply
                  >
                    <!-- datepicker 안 이미지 적용하고 위해 template 생성 -->
                    <template #input-icon>
                      <div class="input-slot-image"></div>
                    </template>
                  </DatePicker>
                </div>
                <!--//E:datePickerWrap-->
                <span class="inline ml8">*최대 1년 조회 가능합니다.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:search-->

      <div class="searchBtnArea">
        <button type="button" class="smallLine">초기화</button>
        <button type="button" class="small">조회</button>
      </div>
      <!--//E:searchBtnArea-->
    </article>

    <article role="contents" title="목록">
      <div class="unitWrap">
        <div class="unit">총 <span>10</span>개</div>

        <div cladss="rightItem">
          <button type="button" class="small">등록</button>
        </div>
      </div>
      <!--//E:unitWrap-->

      <table class="vertical">
        <colgroup>
          <col style="width: 6%" />
          <col style="width: 16%" />
          <col style="width: 13%" />
          <col style="width: 13%" />
          <col style="width: 13%" />
          <col style="width: 13%" />
          <col style="width: 13%" />
          <col style="width: 13%" />
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>발행인(회사명)</th>
            <th>대표자명</th>
            <th>아이디</th>
            <th>사업자번호</th>
            <th>법인등록번호</th>
            <th>등록일</th>
            <th>권한설정</th>
          </tr>
        </thead>
        <!-- 계정관리 발행인 리스트 api 데이터가 없을 때 표시 v-if -->
        <tbody>
          <!-- tr 영역 하나를 가지고 뿌려주는 작업 필요 v-for -->
          <tr>
            <td class="center">10</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">9</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">8</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">탈퇴<br />2024.05.08</td>
          </tr>
          <tr>
            <td class="center">7</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">6</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">5</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">4</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center"><a href="javascript:void(0);" class="underline">(주)가나다</a></td>
            <td class="center">r가나다</td>
            <td class="center">adsf@gmail.com</td>
            <td class="center">000-00-00000</td>
            <td class="center">000000-0000000</td>
            <td class="center">2024.04.08</td>
            <td class="center">접근허용</td>
          </tr>
        </tbody>
        <!-- 계정관리 발행인 리스트 api 데이터가 없을 때 표시 v-if -->
        <tbody>
          <tr>
            <td colspan="8" class="center nodata">등록된 게시물이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <nav class="page w100">
        <button type="button" class="first"></button>
        <button type="button" class="prev"></button>
        <a href="javascript:void(0);" class="current">1</a>
        <a href="javascript:void(0);">2</a>
        <a href="javascript:void(0);">3</a>
        <a href="javascript:void(0);">4</a>
        <a href="javascript:void(0);">5</a>
        <a href="javascript:void(0);">6</a>
        <a href="javascript:void(0);">7</a>
        <a href="javascript:void(0);">8</a>
        <a href="javascript:void(0);">9</a>
        <a href="javascript:void(0);">10</a>
        <button type="button" class="next"></button>
        <button type="button" class="last"></button>
      </nav>
    </article>
  </main>
</template>

<script setup>
import store from '@/store'
import { computed } from 'vue'
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
</script>

<style></style>
