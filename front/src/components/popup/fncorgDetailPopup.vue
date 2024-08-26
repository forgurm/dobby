<template>
  <!--계좌관리기관 팝업2-->
  <div
    class="popup type2"
    style="width: 36rem; height: 29.6rem; top: 32.7rem; left: calc(50% - 18rem); display: block"
  >
    <button type="button" class="close"></button>
    <h1>계좌관리기관</h1>
    <table>
      <colgroup>
        <col style="width: 25%" />
        <col style="width: 40%" />
        <col style="width: 35%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left pb16">발행인</th>
          <td class="left pb16" colspan="2">주식회사 가나다</td>
        </tr>
        <tr>
          <th class="left pb8 vaTop" rowspan="3">발행종목</th>
          <td class="left pb8" colspan="2">NH농협은행</td>
        </tr>
        <tr>
          <td class="left pb8" colspan="2">NH저축은행</td>
        </tr>
        <tr>
          <td class="left pb8" colspan="2">SH수협</td>
        </tr>
      </tbody>
    </table>
    <div class="btnArea">
      <button type="button">확인</button>
    </div>
  </div>

  <div class="dim" style="display: block"></div>
</template>
