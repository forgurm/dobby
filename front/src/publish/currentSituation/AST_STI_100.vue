<template>
  <main role="main" title="토큰증권현황">
    <header role="mainHeader">
      <h1 class="ttl">토큰증권현황</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;현황 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;토큰증권명 입력</a>
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
              <th class="left">증권구분</th>
              <td class="left">
                <div class="selectBox w200">
                  <button type="button">전체</button>
                  <ul>
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div>
                <!--//E:selectBox-->
              </td>
              <th class="center">종목코드</th>
              <td class="left">
                <label class="edit" style="width: 37.4rem">
                  <input type="text" class="w100 left" placeholder="종목코드 입력" />
                  <button type="button" class="del"></button>
                </label>
              </td>
            </tr>
            <tr>
              <th class="left">발행인</th>
              <td colspan="3">
                <label class="edit" style="width: 35.4rem">
                  <input type="text" class="w100 left" placeholder="종목코드 입력" />
                  <button type="button" class="del"></button>
                </label>
              </td>
            </tr>
            <tr>
              <th class="left">계좌관리기관</th>
              <td class="left" colspan="3">
                <input type="checkbox" id="all" checked />
                <label for="all">전체</label>

                <input type="checkbox" id="aBank" class="ml12" />
                <label for="aBank">A은행</label>

                <input type="checkbox" id="bBank" class="ml12" />
                <label for="bBank">B은행</label>

                <input type="checkbox" id="cBank" class="ml12" />
                <label for="cBank">C은행</label>
              </td>
            </tr>
            <tr>
              <th class="left">토큰증권상태</th>
              <td class="left" colspan="3">
                <span class="db mb16">
                  <input type="checkbox" id="all2" checked />
                  <label for="all">전체</label>

                  <input type="checkbox" id="1" class="ml12" />
                  <label for="1">발행완료</label>

                  <input type="checkbox" id="2" class="ml12" />
                  <label for="2">발행취소대기</label>

                  <input type="checkbox" id="3" class="ml12" />
                  <label for="3">발행취소진행</label>

                  <input type="checkbox" id="4" class="ml12" />
                  <label for="4">발행취소완료</label>
                </span>

                <input type="checkbox" id="5" checked />
                <label for="5">청산대기</label>

                <input type="checkbox" id="6" class="ml12" />
                <label for="6">청산진행</label>

                <input type="checkbox" id="7" class="ml12" />
                <label for="7">청산완료</label>

                <input type="checkbox" id="8" class="ml12" />
                <label for="8">배정대기</label>

                <input type="checkbox" id="9" class="ml12" />
                <label for="9">배정진행</label>

                <input type="checkbox" id="10" class="ml12" />
                <label for="10">배정완료</label>
              </td>
            </tr>
            <tr>
              <th class="left">발행기간</th>
              <td colspan="3" class="left">
                <div class="datePickerWrap">
                  <div class="datePicker">
                    YYYY-MM-DD
                    <button type="button" class="cal"></button>
                  </div>
                </div>
                <!--//E:datePickerWrap-->
                &nbsp;~&nbsp;
                <div class="datePickerWrap ml8">
                  <div class="datePicker">
                    YYYY-MM-DD
                    <button type="button" class="cal"></button>
                  </div>
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
        <div class="unit">총 <span>4</span>개</div>
        <div class="rightItem">
          <button type="button" class="small">엑셀 다운로드</button>
        </div>
      </div>
      <!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width: 6%" />
          <col style="width: 14%" />
          <col style="width: 14%" />
          <col style="width: 10%" />
          <col style="width: 12%" />
          <col style="width: 14%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>종목코드</th>
            <th>증권구분</th>
            <th>발행인</th>
            <th>계좌관리기관</th>
            <th>발행수량</th>
            <th>액면가</th>
            <th>발행일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">4</td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">투자계약증권</td>
            <td class="center">주식회사 가나다</td>
            <td class="center">NH농협은행 외1</td>
            <td class="center">1,000,000</td>
            <td class="center">10,000</td>
            <td class="center">2024.05.27</td>
            <td class="center">발행완료</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">투자계약증권</td>
            <td class="center">주식회사 가나다</td>
            <td class="center">NH농협은행 외1</td>
            <td class="center">1,000,000</td>
            <td class="center">10,000</td>
            <td class="center">2024.05.27</td>
            <td class="center">발행완료</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">투자계약증권</td>
            <td class="center">주식회사 가나다</td>
            <td class="center">NH농협은행 외1</td>
            <td class="center">1,000,000</td>
            <td class="center">10,000</td>
            <td class="center">2024.05.27</td>
            <td class="center">발행완료</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">투자계약증권</td>
            <td class="center">주식회사 가나다</td>
            <td class="center">NH농협은행 외1</td>
            <td class="center">1,000,000</td>
            <td class="center">10,000</td>
            <td class="center">2024.05.27</td>
            <td class="center">발행완료</td>
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
  </main>
</template>

<script>
export default {}
</script>

<style></style>
