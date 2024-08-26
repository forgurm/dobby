<template>
    <main role="main" title=""></main>
</tempalte>

<script setup>
import store from '@/store'
import { computed } from 'vue'
const lnbStatus = computed(() => store.state.service.lnb.status)
console.log('lnbStatus:', lnbStatus)
</script>