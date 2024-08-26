<template>
  <div class="settings-page">
    <h2>개인설정 페이지</h2>
    <router-view></router-view> <!-- 하위 라우트를 렌더링하기 위한 router-view -->
  </div>
</template>

<script>
export default {
  name: 'PrivateSettingsPage'
};
</script>

<style scoped>
.settings-page {
  padding: 20px;
}
</style>
