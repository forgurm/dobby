<template>
  <div class="symbol-page">
    <button v-if="isMobile" class="modal-button" @click="showModal = true">{{ selectedTabTitle }}</button>
    <div v-if="isMobile && showModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="showModal = false">&times;</span>
        <h2>탭 선택</h2>
        <div v-for="(exchange, index) in exchanges" :key="index" class="modal-tab" @click="selectTab(index, exchange.exchange_code)">
          {{ exchange.exchange_name }} (<span :class="{ empty: exchange.empty_count > 0 }">{{ exchange.empty_count }}</span>/{{ exchange.symbol_count }})
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="tabs">
      <div
        v-for="(exchange, index) in exchanges"
        :key="index"
        class="tab"
        @click="selectTab(index, exchange.exchange_code)"
        :class="{ active: selectedTab === index }"
      >
        {{ exchange.exchange_name }} (<span :class="{ empty: exchange.empty_count > 0 }">{{ exchange.empty_count }}</span>/{{ exchange.symbol_count }})
      </div>
    </div>

    <div v-if="selectedTab !== null" class="tab-content">
      <button @click="updateAllSymbols" class="update-button">모두저장</button>
      <div v-if="updateStatus" :class="{'success': updateStatus === '성공', 'error': updateStatus === '실패'}" class="update-status">
        {{ updateStatus }}
      </div>
      <div v-if="exchanges[selectedTab]">
        <div v-for="symbol in exchanges[selectedTab].symbols" :key="symbol.symbol_code" class="symbol-item">
          <span>{{ formatSymbolCode(symbol.symbol_code) }}</span>
          <input v-model="symbol.symbol_name" class="symbol-input"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import symbolScript from '@/components/symbolScript';

export default {
  name: 'SymbolPage',
  props: ['exchangeCode'],
  ...symbolScript
};
</script>

<style src="../assets/css/symbol.css"></style>
