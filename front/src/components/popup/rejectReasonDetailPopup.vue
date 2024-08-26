<template>
  <!--거절사유 팝업-->
  <div
    class="popup type2"
    style="width: 60rem; height: 48.7rem; top: 13.2rem; left: calc(50% - 15rem)"
  >
    <button type="button" class="close"></button>
    <h1>거절사유입력</h1>
    <p class="mb20">
      <span class="black">거절 일자 :</span> 2024.04.30<br />
      <span class="black">거절계좌관리기관 :</span> A금융기관<br />
      <span class="black">거절사유 :</span>
    </p>
    <textarea class="w100" style="height: 24.7rem">토큰수량 불일치</textarea>
    <div class="btnArea">
      <button type="button" class="line">취소</button>
      <button type="button">확인</button>
    </div>
  </div>
  <div class="dim"></div>
</template>

<script setup></script>
