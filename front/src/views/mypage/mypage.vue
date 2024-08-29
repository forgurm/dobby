<template>
  <header role="mainHeader">
    <h1 class="ttl">마이페이지</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;마이페이지</a>
    </nav>
  </header>

  <article role="contents" title="마이페이지">
    <table class="noline">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 38%" />
        <col style="width: 12%" />
        <col style="width: 38%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left">아이디</th>
          <td class="left">banking@bank.com</td>
          <th class="left">비밀번호</th>
          <td class="left"><button type="button" class="medium">비밀번호변경</button></td>
        </tr>
        <!-- 전자지갑 주소가 있을 때, 표시 v-if -->
      </tbody>
    </table>
    <div class="cautionBlue">
      <p>*비밀번호 외 기관정보수정을 원할 시 서비스관리에게 직접 연락해 주세요.</p>
    </div>
  </article>

  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="large">홈</button>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
