<template>
  <main class="login">
    <div class="header_login"></div>
    <form>
      <fieldset>
        <legend class="hidden">STOGeneration 로그인</legend>

        <label for="userId" class="edit">
          <!-- validation 통과 안 되었을 때, class에 invalid 추가 ---- class-bind -->
          <input type="text" placeholder="아이디를 입력해주세요." id="userId" class="valid" />
          <!-- id input이 입력 안 되었을 때 활성화 필요 v-if -->
          <p class="feedback">* 아이디를 입력해 주세요.</p>
          <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
          <button type="button" class="del"></button>
        </label>

        <label for="userPw" class="edit">
          <!-- validation 통과 안 되었을 때, class에 invalid 추가  ----- class-bind -->
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="userPw"
            class="invalid"
          />
          <!-- 아이디/비밀번호 불일치 일 때, 보이도록 활성화 필요 ---- v-if -->
          <p class="feedback">
            * 아이디 또는 비밀번호를 잘못 입력했습니다.<br />
            입력하신 내용을 다시 확인해주세요.
          </p>
          <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 v-if -->
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
</template>

<script setup></script>

<style></style>
