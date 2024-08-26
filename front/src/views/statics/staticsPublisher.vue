<!-- 홈 > 통계 > 발행인별 -->
<template>
  <main role="main" title="통계-계좌관리기관별">
    <header role="mainHeader">
      <h1 class="ttl">통계</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;통계</a>
      </nav>
    </header>

    <nav class="depth2 mb80">
      <a href="javascript:void(0);">종합</a>
      <a href="javascript:void(0);">발행인별</a>
      <a href="javascript:void(0);" class="current">계좌관리기관별</a>
    </nav>

    <div class="unitWrap">
      <div class="rightItem multi">
        <span class="dark db mb6">*조회기준일시 : 2024.05.03 10:00:12</span>
        <button type="button" class="small">엑셀 다운로드</button>
      </div>
    </div>
    <!--//E:unitWrap-->

    <article role="contents" title="토큰발행현황">
      <hgroup class="ttl mb0">
        <h3 class="ttl mb0 pd0">토큰발행현황</h3>
      </hgroup>

      <div class="unitWrap">
        <div class="rightItem grey">(단위 : 백만원)</div>
      </div>
      <!--//unitWrap-->

      <table class="chart">
        <colgroup>
          <col style="width: 14%" />
          <col style="width: 14%" />
          <col style="width: 12%" />
          <col style="width: 12%" />
          <col style="width: 12%" />
          <col style="width: 12%" />
          <col style="width: 12%" />
          <col style="width: 12%" />
        </colgroup>
        <thead>
          <tr>
            <th>발행인(회사)</th>
            <th>발행토큰증권</th>
            <th>계좌관리기관</th>
            <th>발행수량</th>
            <th>투자자수</th>
            <th>모집(매출)총액</th>
            <th>발행일</th>
            <th>청산일</th>
          </tr>
        </thead>
        <!-- 발행인(회사) 수에 따라 tbody 영역 하나를 가지고 뿌려주는 작업 필요 v-for -->
        <tbody>
          <tr>
            <!-- 발행토큰증권 수에 따라 rowspan 증가 -->
            <td class="center" rowspan="4">a회사</td>
            <!-- 발행토큰증권 계좌관리기관 수에 따라 rowspan 증가 -->
            <td class="center" rowspan="2">kr1234567890</td>
            <td class="center">a금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
          <tr>
            <td class="center">b금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
          <tr>
            <td class="center">kr1234567890</td>
            <td class="center">a금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
          <tr>
            <td class="center">kr1234567890</td>
            <td class="center">a금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
        </tbody>
        <tbody class="tfoot">
          <tr>
            <td class="center">총계</td>
            <td class="center" colspan="2">3건</td>
            <td class="center">4,000,000</td>
            <td class="center">2,000</td>
            <td class="center">492.,491,582</td>
            <td class="center">&nbsp;</td>
            <td class="center">&nbsp;</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="center" rowspan="2">a회사</td>
            <td class="center">kr1234567890</td>
            <td class="center">a금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
          <tr>
            <td class="center">kr1234567890</td>
            <td class="center">b금융기관</td>
            <td class="center">1,000,000</td>
            <td class="center">50</td>
            <td class="center">123,123,123</td>
            <td class="center">2023.01.01</td>
            <td class="center">2023.12.31</td>
          </tr>
        </tbody>
        <tbody class="tfoot">
          <tr>
            <td class="center">총계</td>
            <td class="center" colspan="2">3건</td>
            <td class="center">4,000,000</td>
            <td class="center">2,000</td>
            <td class="center">492.,491,582</td>
            <td class="center">&nbsp;</td>
            <td class="center">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </article>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
