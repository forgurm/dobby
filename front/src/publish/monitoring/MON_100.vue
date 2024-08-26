<!-- 로그인 후 홈 -->
<template>
  <main role="main" :class="lnbStatus ? '' : 'lnbClose'">
    <header role="mainHeader">
      <h1 class="ttl">모니터링</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;모니터링</a>
      </nav>
    </header>
    <iframe
      src="https://fsto-dev.fingerservice.co.kr:8082/"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </main>
</template>

<script setup>
import store from '@/store'
import { computed } from 'vue'
const lnbStatus = computed(() => store.state.service.lnb.status)
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
}
</style>
