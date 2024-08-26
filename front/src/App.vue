<template>
  <div class="wrap" :class="!lnbStatus ? 'lnbClose' : ''">
    <headerComponent v-if="true"></headerComponent>
    <lnbComponent :lnbStatus="lnbStatus"></lnbComponent>
    <!-- contents 영역 -->
    <main role="main" title="route." :class="!lnbStatus ? 'lnbClose' : ''">
      <RouterView />
    </main>
    <!-- <RouterView v-else /> -->
  </div>
  <!-- popup -->
  <alertPopup v-if="alertPopupComputed" />
  <confirmPopup v-if="confirmPopupComputed" />

  <!-- loadingBar -->
  <loadingBar v-if="loadingBarComputed" />
</template>

<script setup>
import headerComponent from '@/components/defaults/header.vue'
import lnbComponent from '@/components/defaults/lnb.vue'
import store from '@/store'
/* popup */
import alertPopup from '@/components/popup/alertPopup.vue'
import confirmPopup from '@/components/popup/confirmPopup.vue'

/* loadingBar */
import loadingBar from '@/components/loading/loadingBar.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
const routeName = computed(() => route.name)
const route = useRoute()
const lnbStatus = computed(() => store.state.service.lnb.status)

const alertPopupComputed = computed(() => store.state.popup.alertPopup.status)
const confirmPopupComputed = computed(() => store.state.popup.confirmPopup.status)
const loadingBarComputed = computed(() => store.state.service.loadingBar.status)
</script>
<style scoped></style>
