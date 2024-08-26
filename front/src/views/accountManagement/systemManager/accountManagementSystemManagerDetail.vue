<!-- 홈 > 계정관리 > 시스템운영자 > 상세 -->
<template>
  <main role="main" title="계정관리-시스템운영자">
    <header role="mainHeader">
      <h1 class="ttl">시스템운영자</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;시스템운영자 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
      </nav>
    </header>

    <article role="contents" class="mb0" title="시스템운영자 정보">
      <hgroup class="ttl">
        <h3 class="ttl">시스템운영자 정보</h3>
      </hgroup>

      <div class="unitWrap">
        <div class="rightItem grey">*초기 비밀번호는 stog1234!@입니다.</div>
      </div>
      <!--//E:unitWrap-->

      <table class="horizontal">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left required"><span>아이디</span></th>
            <td class="left">banking@bank.com</td>
            <th class="left">비밀번호초기화</th>
            <td class="left">
              <button type="button" class="medium">비밀번호 초기화</button>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>권한설정</span></th>
            <td class="left" colspan="3">
              <input type="radio" name="setting" id="setYes" checked />
              <label for="setYes">접근허용</label>
              <input type="radio" name="setting" id="setNo" />
              <label for="setNo">탈퇴(접근불가)</label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>시스템운영자명</span></th>
            <td class="left" colspan="3">운영자1</td>
          </tr>
          <tr>
            <th class="left">비고</th>
            <td class="left" colspan="3">
              <label>
                <textarea placeholder="내용을 입력해주세요." class="w100">
6/30 이후 접근불가 처리해야함</textarea
                >
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer class="bottomBtnArea" role="mainFooter">
      <button type="button" class="largeLine">목록</button>
      <button type="button" class="large">수정완료</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
