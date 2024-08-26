<template>
  <div class="gnb">
    <section class="header">
      <h1 @click="routerPush('dashBoard')"></h1>
      <!--//system name-->
      <nav>
        <a href="javascript:void(0);" @click="routerPush('mypage')">마이페이지</a>
        <a href="javascript:void(0);">로그아웃</a>
      </nav>
    </section>
  </div>
  <!--//E:gnb-->
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const routerPush = (name) => {
  router.push({ name })
}
</script>

<style></style>
