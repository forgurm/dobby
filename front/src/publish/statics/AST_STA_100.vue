<template>
  <main role="main" title="통계-종합">
    
    <header role="mainHeader">
      <h1 class="ttl">통계</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;통계</a>
      </nav>
    </header>

    <nav class="depth2 mb80">
      <a href="javascript:void(0);" class="current">종합</a>
      <a href="javascript:void(0);">발행인별</a>
      <a href="javascript:void(0);">계좌관리기과별</a>
    </nav>

    <div class="unitWrap">
      <div class="rightItem multi">
        <span class="dark db mb6">*조회기준일시 : 2024.05.03 10:00:12</span>
        <button type="button" class="small">엑셀 다운로드</button>
      </div>
    </div><!--//E:unitWrap-->

    <article role="contents" title="누적 발행금액/건수">
      <hgroup class="ttl">\
        <h3 class="ttl">누적 발행금액/건수</h3>
      </hgroup>

      <table class="chart">
        <colgroup>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
        </colgroup>
        <thead>
          <tr>
            <th>기간</th>
            <th>누적 발행건수</th>
            <th>발행인(회사)수</th>
            <th>투자자<span class="dark">(만명)</span></th>
            <th>모집(매출)총액<span class="dark">(억원)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">{플랫폼가입일}~현재</td>
            <td class="center">10</td>
            <td class="center">10</td>
            <td class="center">10</td>
            <td class="center">100</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article role="contents" title="연도별 발행실적">
      <hgroup class="ttl legend">
        <h3 class="ttl">연도별 발행실적</h3>
        <div class="legend">
          <span class="legend led4 box">2022</span>
          <span class="legend led5 box">2023</span>
          <span class="legend led6 box">2024</span>
        </div><!--//E:legend-->
      </hgroup>

      <section role="graph"></section>

      <table class="chart">
        <colgroup>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
        </colgroup>
        <thead>
          <tr>
            <th>연도</th>
            <th>발행건수</th>
            <th>발행인(회사)수</th>
            <th>투자자<span class="dark">(만명)</span></th>
            <th>모집(매출)총액<span class="dark">(억원)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">2024</td>
            <td class="center">2</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">100</td>
          </tr>
          <tr>
            <td class="center">2023</td>
            <td class="center">2</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">100</td>
          </tr>
          <tr>
            <td class="center">2022</td>
            <td class="center">2</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">100</td>
          </tr>
        </tbody>
      </table>
      <p class="cautionBlue">*최근 5년간의 정보를 확인할 수 있습니다.</p>
    </article>

    <article role="contents" title="모집규모별 발행현황">
      <hgroup class="ttl legend">
        <h3 class="ttl">모집규모별 발행현황</h3>
        <div class="legend">
          <span class="legend led3 box">투자자</span>
          <span class="legend led2 box">모집(매출)총액</span>
          <span class="legend led1 line">발행건수</span>
          <span class="legend led7 line">발행인(회사)수</span>
        </div><!--//E:legend-->
      </hgroup>

      <section role="graph"></section>

      <table class="chart">
        <colgroup>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
        </colgroup>
        <thead>
          <tr>
            <th>모집규모</th>
            <th>발행건수</th>
            <th>발행인(회사)수</th>
            <th>투자자<span class="dark">(만명)</span></th>
            <th>모집(매출)총액<span class="dark">(억원)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">5억 이하</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">5억 ~ 10억 이하</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">25억 ~ 30억 이하</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">30억 초과</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
        </tbody>
      </table>
      <p class="cautionBlue">*누적 발행토큰증권 정보입니다.</p>
    </article>

    <article role="contents" title="계좌관리기관별 총 발행실적">
      <hgroup class="ttl legend">
        <h3 class="ttl">계좌관리기관별 총 발행실적</h3>
        <div class="legend">
          <span class="legend led3 box">계좌관리기관</span>
          <span class="legend led2 box">모집(매출)총액</span>
          <span class="legend led1 line">발행건수</span>
          <span class="legend led7 line">발행인(회사)수</span>
        </div><!--//E:legend-->
      </hgroup>

      <section role="graph"></section>

      <table class="chart">
        <colgroup>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
        </colgroup>
        <thead>
          <tr>
            <th>계좌관리기관</th>
            <th>발행건수</th>
            <th>발행인(회사)수</th>
            <th>투자자<span class="dark">(만명)</span></th>
            <th>모집(매출)총액<span class="dark">(억원)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">a금융투자</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">b은행</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">c금융투자</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
          <tr>
            <td class="center">d은행</td>
            <td class="center">3</td>
            <td class="center">1</td>
            <td class="center">10</td>
            <td class="center">30</td>
          </tr>
        </tbody>
      </table>
      <p class="cautionBlue">*누적 발행토큰증권 정보입니다.</p>
    </article>

    <article role="contents" title="증권구분별 현황">
      <hgroup class="ttl">
        <h3 class="ttl">증권구분별 현황</h3>
      </hgroup>

      <table class="chart">
        <colgroup>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
          <col style="width:20%;"/>
        </colgroup>
        <thead>
          <tr>
            <th>연도</th>
            <th>발행건수</th>
            <th>발행인(회사)수</th>
            <th>투자자<span class="dark">(만명)</span></th>
            <th>모집(매출)총액<span class="dark">(억원)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center" rowspan="2">2024</td>
            <td class="center">수익증권</td>
            <td class="center">2,000,000</td>
            <td class="center">1,000,000</td>
            <td class="center">1,000,000</td>
          </tr>
          <tr>
            <td class="center">수익증권</td>
            <td class="center">2,000,000</td>
            <td class="center">1,000,000</td>
            <td class="center">1,000,000</td>
          </tr>
        </tbody>
        <tbody class="tfoot">
          <tr>
            <td class="center" colspan="2">총계</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="center">2023</td>
            <td class="center">수익증권</td>
            <td class="center">2,000,000</td>
            <td class="center">1,000,000</td>
            <td class="center">1,000,000</td>
          </tr>
        </tbody>
        <tbody class="tfoot">
          <tr>
            <td class="center" colspan="2">총계</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="center">2022</td>
            <td class="center">수익증권</td>
            <td class="center">2,000,000</td>
            <td class="center">1,000,000</td>
            <td class="center">1,000,000</td>
          </tr>
        </tbody>
        <tbody class="tfoot">
          <tr>
            <td class="center" colspan="2">총계</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
            <td class="cetner">6,000,000</td>
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
