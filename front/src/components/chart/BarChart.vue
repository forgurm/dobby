<template>
    <div>
      <BarChart :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  import adminApi from '@/assets/api/AdminApi.js';
  // 차트 설정
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  const chartData = ref({
    labels: [], // 거래소 이름이 들어갈 라벨
    datasets: [
      {
        label: 'Symbol Count',
        backgroundColor: '#42A5F5',
        data: [] // 각 거래소의 심볼 수 데이터
      }
    ]
  });
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Symbol Count per Exchange'
      }
    }
  };
  
  // 심볼 리스트 데이터 로드
  const fetchSymbolList = async () => {
    try {
      const response = await adminApi.main.symbolList({});
      
      if (Array.isArray(response.data)) {
        // 심볼 데이터를 차트에 반영
        chartData.value.labels = response.data.map(item => item.exchange_name); // 거래소 이름 라벨
        chartData.value.datasets[0].data = response.data.map(item => item.count); // 심볼 수 데이터
      }
    } catch (error) {
      console.error('Error fetching symbol list:', error);
    }
  };
  
  // 컴포넌트가 로드될 때 데이터를 로드
  onMounted(() => {
    fetchSymbolList();
  });
  </script>