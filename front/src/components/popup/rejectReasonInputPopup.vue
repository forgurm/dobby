<template>
  <!--거절사유입력 팝업-->
  <div
    class="popup type2"
    style="width: 60rem; height: 48.7rem; top: 13.2rem; left: calc(50% - 15rem)"
  >
    <button type="button" class="close"></button>
    <h1>거절사유입력</h1>
    <p class="mb20">
      거절하시겠습니까?<br />
      거절 후 승인결과를 변경할 수 없습니다.
    </p>
    <textarea
      class="w100"
      style="height: 24.7rem"
      placeholder="거절 사유를 간단히 입력해 주세요.(선택)"
    ></textarea>
    <div class="btnArea">
      <button type="button" class="line">취소</button>
      <button type="button">확인</button>
    </div>
  </div>
  <div class="dim"></div>
</template>

<script setup></script>
