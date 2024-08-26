<template>
  <header role="mainHeader">
    <h1 class="ttl">발행인현황</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;현황 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;발행인현황</a>
    </nav>
  </header>

  <article role="contents" class="mb40" title="검색 테이블">
    <div class="search w100">
      <table>
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 88%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">발행인</th>
            <td class="left">
              <label class="edit" style="width: 44.4rem">
                <input type="text" class="w100 left" placeholder="발행인입력" />
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left">발행기간</th>
            <td class="left">
              <div class="datePickerWrap">
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
      <div class="rightItem">
        <button type="button" class="small">엑셀 다운로드</button>
      </div>
    </div>
    <!--//E:unitWrap-->

    <table class="vertical type2">
      <colgroup>
        <col style="width: 6%" />
        <col style="width: 46%" />
        <col style="width: 12%" />
        <col style="width: 12%" />
        <col style="width: 12%" />
        <col style="width: 12%" />
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>발행인</th>
          <th>발행종목</th>
          <th>발행토큰증권수량</th>
          <th>계좌관리기관</th>
          <th>최근 발행일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center">10</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">9</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">8</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">7</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">6</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">5</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">4</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">3</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">2</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
        <tr>
          <td class="center">1</td>
          <td class="center"><a href="javascript:void(0);">주식회사 가나다</a></td>
          <td class="center"><a href="javascript:void(0);">3</a></td>
          <td class="center">123,123,123</td>
          <td><a href="javascript:void(0);">3</a></td>
          <td>2024.06.06</td>
        </tr>
      </tbody>
      <tbody>
        <!--//nodata-->
        <tr>
          <td colspan="10" class="center nodata">일치하는 검색결과가 없습니다.</td>
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
  <!-- 발행종목 클릭 시, 보여주는 팝업 -->
  <fncorgDetailPopup v-if="false" />
  <!-- 계좌관리기관 클릭 시, 보여주는 팝업 -->
  <issuanceDetailPopup v-if="true" />
</template>

<script setup>
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import issuanceDetailPopup from '@/components/popup/issuanceDetailPopup.vue'
import fncorgDetailPopup from '@/components/popup/fncorgDetailPopup.vue'
</script>

<style></style>
