<template>
  <main role="main"  title="접속이력관리(발행인)">
      <header role="mainHeader">
        <h1 class="ttl">접속이력관리(발행인)</h1>
        <nav class="path">
          <a href="javascript:void(0);" class="home">홈 ></a>
          <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
          <a href="javascript:void(0);" class="depth">&nbsp;접속이력관리 ></a>
          <a href="javascript:void(0);" class="depth">&nbsp;발행인</a>
        </nav>
      </header>

      <article role="contents" class="mb40" title="검색 테이블">
      <div class="search w100">
        <table>
          <colgroup>
            <col style="width: 12%;">
            <col style="width: 88%;">
          </colgroup>
          <tbody>
            <tr>
              <th>기간</th>
              <td>
                <div class="datePickerWrap">
                  <div class="datePicker">
                    YYYY-MM-DD 
                    <button type="button" class="cal"></button>
                  </div>
                </div><!--//E:datePickerWrap-->
                &nbsp;~&nbsp;
                <div class="datePickerWrap ml8">
                  <div class="datePicker">
                    YYYY-MM-DD 
                    <button type="button" class="cal"></button>
                  </div>
                </div><!--//E:datePickerWrap-->
                <span class="inline ml8">*최대 1년 조회 가능합니다.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div><!--//E:search-->

      <div class="searchBtnArea">
        <button type="button" class="smallLine">초기화</button>
        <button type="button" class="small">조회</button>
      </div><!--//E:searchBtnArea-->
    </article>

    <article role="contents" title="목록">
      <div class="unitWrap">
        <div class="unit">총 <span>10</span>개</div>

        <div class="rightItem">
          <button type="button" class="small">등록</button>
        </div>
      </div><!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width: 6%"/>
          <col style="width: 31%"/>
          <col style="width: 32%"/>
          <col style="width: 31%"/>
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>접속일시</th>
            <th>아이피</th>
            <th>아이디</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">4</td>
            <td class="center">2024.05.15 15:15:15</td>
            <td class="center">123.123.123</td>
            <td class="center">qwer@qwer.com</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center">2024.05.15 15:15:15</td>
            <td class="center">123.123.123</td>
            <td class="center">qwer@qwer.com</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center">2024.05.15 15:15:15</td>
            <td class="center">123.123.123</td>
            <td class="center">qwer@qwer.com</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center">2024.05.15 15:15:15</td>
            <td class="center">123.123.123</td>
            <td class="center">qwer@qwer.com</td>
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
        <button type="button" class="last"></button></nav>
    </article>

    </main>
</template>

<script>
export default {}
</script>

<style></style>
