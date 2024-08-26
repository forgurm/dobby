<template>
  <main class="login">
    <div class="header_login"></div>
    <form>
      <fieldset>
        <legend class="hidden">STOGeneration 로그인</legend>

        <label for="userId" class="edit">
          <input type="text" placeholder="아이디를 입력해주세요." id="userId" class="valid" />
          <p class="feedback">* 아이디를 입력해 주세요.</p>
          <button type="button" class="del"></button>
        </label>

        <label for="userPw" class="edit">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="userPw"
            class="invalid"
          />
          <p class="feedback">
            * 아이디 또는 비밀번호를 잘못 입력했습니다.<br />
            입력하신 내용을 다시 확인해주세요.
          </p>
          <button type="button" class="del"></button>
        </label>

        <button type="submit">로그인</button>
        <div class="IDsave">
          <input type="checkbox" name="IDsave" id="IDsave" /><label for="IDsave">아이디 저장</label>
        </div>
      </fieldset>
    </form>

    <section class="login">
      <a href="javascript:void(0);">비밀번호를 잊어버리셨나요?</a>
      <p>서비스 관리자에게 연락해 주세요.</p>
    </section>
  </main>

  <!--원버튼 팝업-->
  <div
    class="popup"
    style="width: 30rem; height: 30rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <h1>비밀번호 입력오류 초과</h1>
    <p style="height: 12.4rem">
      비밀번호 입력오류 초과입니다.
      <br />
      서비스관리자에게 연락해 주세요.
    </p>
    <div class="btnArea">
      <button type="button" onclick="">확인</button>
    </div>
  </div>

  <!--투버튼 팝업-->
  <div
    class="popup"
    style="width: 30rem; min-height: 30rem; left: calc(50% - 15rem); top: 26.6rem; display: none"
  >
    <h1>비밀번호 변경</h1>

    <p style="height: 12.4rem">
      장기간 비밀번호를 변경하지 않고 동일한 비밀번호를 사용중입니다. 정기적인 비밀번호 변경으로
      개인정보를 보호해 주세요.
    </p>
    <div class="btnArea">
      <button type="button" class="line" onclick="">다음에 변경</button>
      <button type="button" onclick="">비밀번호 변경</button>
    </div>
  </div>

  <!--탈퇴한 계정-->
  <div
    class="popup"
    style="width: 30rem; height: 15.6rem; left: calc(50% - 18rem); top: 26.6rem; display: none"
  >
    <h1>탈퇴한 계정입니다.</h1>

    <div class="btnArea">
      <button type="button" onclick="">확인</button>
    </div>
  </div>

  <div class="dim" style="display: none"></div>
</template>

<script>
export default {}
</script>

<style></style>
