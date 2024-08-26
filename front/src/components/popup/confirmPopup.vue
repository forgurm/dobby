<template>
  <!--투버튼 팝업-->
  <div
    class="popup"
    style="width: 30rem; min-height: 15.6rem; left: calc(50% - 15rem); top: 26.6rem"
  >
    <h1 v-html="confirmPopup.title"></h1>

    <p v-if="confirmPopup.contents" v-html="confirmPopup.contents"></p>
    <div class="btnArea">
      <button type="button" class="line" @click="confirmPopup.button.oneFunction">
        {{ confirmPopup.button.oneName }}
      </button>
      <button type="button" @click="confirmPopup.button.twoFunction">
        {{ confirmPopup.button.twoName }}
      </button>
    </div>
  </div>
  <div class="dim"></div>
</template>

<script setup>
import store from '@/store'

const confirmPopup = store.state.popup.confirmPopup
</script>
