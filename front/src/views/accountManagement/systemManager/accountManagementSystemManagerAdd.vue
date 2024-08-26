<!-- 홈 > 계정관리 > 시스템운영자 > 등록 -->
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
          <col style="width: 88%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left required"><span>아이디</span></th>
            <td class="left">
              <label class="edit w100">
                <input
                  type="text"
                  class="w100 left"
                  placeholder="아이디 입력"
                  value="asdgf@asdfg.com"
                />
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>시스템운영자명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="" value="운영자1" />
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer class="bottomBtnArea" role="mainFooter">
      <button type="button" class="largeLine">취소</button>
      <button type="button" class="large">등록</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
