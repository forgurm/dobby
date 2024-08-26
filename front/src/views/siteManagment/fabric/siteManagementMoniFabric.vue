<template>
  <header role="mainHeader">
    <h1 class="ttl">Fabric</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 > Fabric</a>
    </nav>
  </header>
  <iframe src="http://52.79.172.0:3000/" frameborder="0" allowfullscreen></iframe>
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
