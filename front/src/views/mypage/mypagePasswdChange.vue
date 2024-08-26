<template>
  <header role="mainHeader">
    <h1 class="ttl">마이페이지</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;마이페이지</a>
    </nav>
  </header>

  <article role="contents" title="비밀번호 변경">
    <hgroup class="ttl">
      <h3 class="ttl">비밀번호 변경</h3>
    </hgroup>

    <table class="noline">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 80%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="left"><span class="required">현재 비밀번호 입력</span></th>
          <td class="left">
            <label class="edit w100">
              <input type="password" class="w100" />
              <button type="button" class="del"></button>
            </label>
          </td>
        </tr>
        <tr>
          <th class="left"><span class="required">변경 비밀번호 입력</span></th>
          <td class="left">
            <label class="edit w100">
              <!-- validation 통과 되었을 때, correct class 추가 class-binding-->
              <input type="password" class="required correct w100" />
              <!-- validation 통과 및 미 통과 상태일 때 description 표시 v-if -->
              <p class="feedback">*사용가능</p>
              <button type="button" class="del"></button>
            </label>
          </td>
        </tr>
        <tr>
          <th class="left"><span class="required">변경 비밀번호 확인</span></th>
          <td class="left">
            <label class="edit w100">
              <!-- validation 통과 되었을 때, error class 추가 -->
              <input type="password" class="required error w100" />
              <!-- validation 통과 및 미 통과 상태일 때 description 표시 v-if -->
              <p class="feedback">*변경비밀번호와 일치하지 않습니다.</p>
              <button type="button" class="del"></button>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="largeLine">취소</button>
    <button type="button" class="large">저장</button>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
