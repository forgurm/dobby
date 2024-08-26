<template>
  <header role="mainHeader">
    <h1 class="ttl">공통코드관리</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;공통코드관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;등록</a>
    </nav>
  </header>

  <article role="contetns" class="mb40" title="1차코드">
    <hgroup class="ttl">
      <h3 class="ttl">1차코드</h3>
    </hgroup>
    <table class="horizontal">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 38%" />
        <col style="width: 12%" />
        <col style="width: 38%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="required left vaMiddle"><span>1차 코드 분류명</span></th>
          <td class="left vaMiddle">
            <label class="edit w100">
              <input type="text" class="w100 left" placeholder="서비스명 입력" />
              <button type="button" class="del"></button>
            </label>
          </td>
          <th class="required left vaMiddle">
            <span>1차 코드명<br /><sub>(증권표준코드)</sub></span>
          </th>
          <td class="left vaMiddle">
            <label class="edit w100">
              <input type="text" class="w100 left" />
              <button type="button" class="del"></button>
            </label>
          </td>
        </tr>
        <tr>
          <th class="required left"><span>코드설명</span></th>
          <td class="left vaMiddle">
            <label class="edit w100">
              <input type="text" class="w100 left" placeholder="계좌관리기관 선택분류" />
              <button type="button" class="del"></button>
            </label>
          </td>
          <th class="required left"><span>사용여부</span></th>
          <td class="left">
            <input type="radio" name="used" id="use" checked /><label for="use">사용</label>
            <input type="radio" name="used" id="unuse" /><label for="unuse">미사용</label>
          </td>
        </tr>
      </tbody>
    </table>
  </article>

  <article role="contents" class="mb0" title="2차코드">
    <hgroup class="ttl">
      <h3 class="ttl">2차코드</h3>
    </hgroup>
    <div class="unitWrap">
      <div class="rightItem">
        <button type="button" class="small">추가</button>
        <button type="button" class="smallLine ml8">삭제</button>
      </div>
    </div>
    <!--//E:unitWrap-->
    <table class="chart">
      <colgroup>
        <col style="width: 8%" />
        <col style="width: 35%" />
        <col style="width: 35%" />
        <col style="width: 12%" />
        <col style="width: 10%" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>2차코드</th>
          <th>2차코드분류명(노출)</th>
          <th>사용여부</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center">1</td>
          <td class="left">BANK1</td>
          <td class="left">
            <label class="edit w100">
              <input type="text" class="w100 left" />
              <button type="button" class="del"></button>
            </label>
          </td>
          <td>
            <input type="radio" name="used1" id="use1" checked /><label for="use1">사용</label>
            <input type="radio" name="used1" id="unuse1" /><label for="unuse1">미사용</label>
          </td>
          <td class="center">2024.04.25</td>
        </tr>
        <tr>
          <td class="center">2</td>
          <td class="left">STOCK</td>
          <td class="left">
            <label class="edit w100">
              <input type="text" class="w100 left" />
              <button type="button" class="del"></button>
            </label>
          </td>
          <td class="center">
            <input type="radio" name="used2" id="use2" checked /><label for="use2">사용</label>
            <input type="radio" name="used2" id="unuse2" /><label for="unuse2">미사용</label>
          </td>
          <td class="center">2024.04.25</td>
        </tr>
      </tbody>
    </table>
  </article>

  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="largeLine">목록</button>
    <button type="button" class="large">수정완료</button>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
