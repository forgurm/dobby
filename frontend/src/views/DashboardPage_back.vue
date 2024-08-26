<template>
  <div class="dashboard">
    <div class="section">
      <h3>공지</h3>
      <div class="announcement">
        <p>공지 최근 읽지 않은 내용 표시</p>
      </div>
    </div>

    <div class="section">
      <h3>스케쥴</h3>
      <div class="schedule">
        <p>일/주/월간 스케쥴러 표시</p>
      </div>
    </div>

    <div class="section">
      <h3>봇 상태</h3>
      <div class="bot-status">
        <canvas id="botChart"></canvas>
        <div class="status-text">
          <span class="utilization-rate">{{ utilizationRate }}%</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>심볼 상태</h3>
      <div class="symbol-status">
        <div v-for="exchange in exchanges" :key="exchange.exchange_code" class="exchange-chart">
          <canvas :id="'chart-' + exchange.exchange_code" @click="goToSymbolPage(exchange.exchange_code)"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardScript from '@/components/dashboardScript';

export default {
  name: 'DashboardPage',
  ...dashboardScript
};
</script>

<style src="../assets/css/dashboard.css"></style>
