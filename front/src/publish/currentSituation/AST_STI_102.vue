<template>
  <main role="main" title="발행인 현황상세">
    <header role="mainHeader">
      <h1 class="ttl">발행인 현황상세</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;현황 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;발행인현황 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
      </nav>
    </header>

    <article role="contents" title="발행인정보">
      <hgroup class="ttl">
        <h3 class="ttl">발행인정보</h3>
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
            <th class="left">신청구분</th>
            <td>청산</td>
            <th class="left">대표자명</th>
            <td>가나다</td>
          </tr>
          <tr>
            <th class="left">사업자번호</th>
            <td>123-45-67890</td>
            <th class="left">법인등록번호</th>
            <td>123456-1234567</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article role="contents" class="mb0" title="목록">
      <div class="unitWrap">
        <div class="rightItem dark">조회기준일시 2024.04.02 16:00:01</div>
      </div>
      <!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width: 6%" />
          <col style="width: 12%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 9%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 9%" />
        </colgroup>
        <thead>
          <tr>
            <th class="center">NO.</th>
            <th class="center">종목코드</th>
            <th class="center">발행일</th>
            <th class="center">배정일</th>
            <th class="center">청산일</th>
            <th class="center">발행취소일</th>
            <th class="center">총 발행 수량</th>
            <th class="center">확정투자자수</th>
            <th class="center">계좌관리기관</th>
            <th class="center">배정수량</th>
            <th class="center">배정투자자</th>
            <th class="center">토큰증권상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center" rowspan="2">4</td>
            <td class="left" rowspan="2"><a href="javascript:void(0);">KR123456789101</a></td>
            <td class="center" rowspan="2">2024.06.06</td>
            <td class="center" rowspan="2">-</td>
            <td class="center" rowspan="2">-</td>
            <td class="center" rowspan="2">-</td>
            <td class="right" rowspan="2">1,000</td>
            <td class="right" rowspan="2">1,00</td>
            <td calss="center"><a href="javascript:void(0);" class="center">A은행</a></td>
            <td class="right">500</td>
            <td class="right">50</td>
            <td class="center" rowspan="2">발행완료</td>
          </tr>
          <tr>
            <td calss="center"><a href="javascript:void(0);" class="center">B은행</a></td>
            <td class="right">500</td>
            <td class="right">50</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="left"><a href="javascript:void(0);">KR123456789101</a></td>
            <td class="center">2024.06.06</td>
            <td class="center">2024.05.16</td>
            <td class="center">2024.05.30</td>
            <td class="center">2024.06.06</td>
            <td class="right">1,000</td>
            <td class="right">1,00</td>
            <td calss="center"><a href="javascript:void(0);" class="center">A은행</a></td>
            <td class="right">500</td>
            <td class="right">50</td>
            <td class="center">청산완료</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="left"><a href="javascript:void(0);">KR123456789101</a></td>
            <td class="center">2024.06.06</td>
            <td class="center">-</td>
            <td class="center">-0</td>
            <td class="center">2024.06.06</td>
            <td class="right">1,000</td>
            <td class="right">1,00</td>
            <td calss="center"><a href="javascript:void(0);" class="center">A은행</a></td>
            <td class="right">-</td>
            <td class="right">-</td>
            <td class="center">
              취소완료
              <br />
              <span class="db mt16 center">
                <button type="button" class="mediumLine">사유확인</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer class="bottomBtnArea" role="mainFooter">
      <button type="button" class="largeLine">목록</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
