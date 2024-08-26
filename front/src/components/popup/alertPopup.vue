<template>
  <!--원버튼 팝업-->
  <div class="popup" style="width: 30rem; height: 15.6rem; left: calc(50% - 15rem); top: 26.6rem">
    <h1 v-html="alertPopup.title"></h1>
    <p v-if="alertPopup.contents" v-html="alertPopup.contents"></p>
    <div class="btnArea">
      <button type="button" @click="alertPopup.buttonFunction">{{ alertPopup.button }}</button>
    </div>
  </div>
  <div class="dim"></div>
</template>

<script setup>
import store from '@/store'

const alertPopup = store.state.popup.alertPopup
</script>
