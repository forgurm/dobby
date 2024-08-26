<template>
  <header role="mainHeader">
    <h1 class="ttl">공통코드관리</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;공통코드관리</a>
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
            <th>코드분류명</th>
            <td>
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="검색어입력" />
                <button type="button" class="del"></button>
              </label>
            </td>
            <th>사용구분</th>
            <td>
              <div class="selectBox" style="width: 14.6rem">
                <button type="button">전체</button>
                <ul>
                  <li>option name1</li>
                  <li>option name2</li>
                  <li>option name3</li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th>등록일</th>
            <td colspan="3">
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
      <div class="unit">총 <span>10</span>개</div>

      <div class="rightItem">
        <button type="button" class="small">등록</button>
      </div>
    </div>
    <!--//E:unitWrap-->

    <table class="vertical type2">
      <colgroup>
        <col style="width: 6%" />
        <col style="width: 20%" />
        <col style="width: 18%" />
        <col style="width: 18%" />
        <col style="width: 18%" />
        <col style="width: 10%" />
        <col style="width: 10%" />
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>1차코드분류명</th>
          <th>1차코드명</th>
          <th>2차코드</th>
          <th>3차코드</th>
          <th>사용여부</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center">4</td>
          <td class="center"><a href="javascript:void(0);">계좌관리기관</a></td>
          <td class="center">ACCOU</td>
          <td class="center">30개</td>
          <td class="center">30개</td>
          <td class="center">사용</td>
          <td class="center">2024.04.09</td>
        </tr>
        <tr>
          <td class="center">3</td>
          <td class="center"><a href="javascript:void(0);">계좌관리기관</a></td>
          <td class="center">ACCOU</td>
          <td class="center">30개</td>
          <td class="center">30개</td>
          <td class="center">사용</td>
          <td class="center">2024.04.09</td>
        </tr>
        <tr>
          <td class="center">2</td>
          <td class="center"><a href="javascript:void(0);">계좌관리기관</a></td>
          <td class="center">ACCOU</td>
          <td class="center">30개</td>
          <td class="center">30개</td>
          <td class="center">사용</td>
          <td class="center">2024.04.09</td>
        </tr>
        <tr>
          <td class="center">1</td>
          <td class="center"><a href="javascript:void(0);">계좌관리기관</a></td>
          <td class="center">ACCOU</td>
          <td class="center">30개</td>
          <td class="center">30개</td>
          <td class="center">사용</td>
          <td class="center">2024.04.09</td>
        </tr>
      </tbody>
      <!--//nodata-->
      <tbody>
        <tr>
          <td colspan="7" class="center">일치하는 검색결과가 없습니다.</td>
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
</template>

<script>
export default {}
</script>

<style></style>
