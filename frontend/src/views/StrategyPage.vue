<template>
  <div class="strategy-page">
    <h2>전략등록</h2>
    <button @click="openAddStrategyPopup" class="add-button">추가</button>
    <button @click="deleteSelectedStrategies" class="delete-button">삭제</button>
    <div class="strategy-list">
      <div v-for="(strategy, index) in strategies" :key="index" class="strategy-item">
        <input type="checkbox" v-model="strategy.selected" />
        <span>{{ strategy.name }}</span>
      </div>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <button @click="closePopup" class="close-button">닫기</button>
        <h3>전략 추가</h3>
        <div class="popup-body">
          <div class="indicator-list">
            <h4>지표 리스트</h4>
            <div v-for="indicator in indicators" :key="indicator" class="indicator-item" draggable="true" @dragstart="dragStart($event, indicator)">
              {{ indicator }}
            </div>
          </div>
          <div class="strategy-content">
            <h4>전략 내용</h4>
            <div class="dropzone" @dragover="allowDrop" @drop="drop($event, 0)"></div> <!-- 처음 위치에 드랍 가능 -->
            <div v-for="(item, index) in strategyContent" :key="index" class="content-item-wrapper">
              <div class="content-item" @click="openIndicatorPopup(index)">
                <span>{{ item.name }}</span>
                <button @click.stop="removeIndicator(index)" class="delete-button">X</button>
              </div>
              <div class="dropzone" @dragover="allowDrop" @drop="drop($event, index + 1)"></div> <!-- 각 아이템 사이에 드랍 가능 -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showIndicatorPopup" class="modal">
      <div class="modal-content">
        <button @click="closeIndicatorPopup" class="close-button">닫기</button>
        <h3>지표 설정</h3>
        <div v-if="selectedIndicator !== null">
          <label>이름: {{ strategyContent[selectedIndicator].name }}</label>
          <input v-model="strategyContent[selectedIndicator].value" placeholder="수치 입력" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrategyPage',
  data() {
    return {
      strategies: [
        { name: '전략 1', selected: false },
        { name: '전략 2', selected: false }
      ],
      showPopup: false,
      indicators: ['RSI', 'MACD', 'EMA'],
      strategyContent: [],
      showIndicatorPopup: false,
      selectedIndicator: null
    };
  },
  methods: {
    openAddStrategyPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    deleteSelectedStrategies() {
      this.strategies = this.strategies.filter(strategy => !strategy.selected);
    },
    dragStart(event, indicator) {
      event.dataTransfer.setData('indicator', indicator);
    },
    allowDrop(event) {
      event.preventDefault();
    },
    drop(event, index) {
      event.preventDefault();
      const indicator = event.dataTransfer.getData('indicator');
      this.strategyContent.splice(index, 0, { name: indicator, value: '' });
    },
    openIndicatorPopup(index) {
      this.selectedIndicator = index;
      this.showIndicatorPopup = true;
    },
    closeIndicatorPopup() {
      this.showIndicatorPopup = false;
      this.selectedIndicator = null;
    },
    removeIndicator(index) {
      this.strategyContent.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.strategy-page {
  padding: 20px;
}

.add-button, .delete-button {
  margin-right: 10px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
}

.add-button:hover, .delete-button:hover {
  background-color: #45a049;
}

.strategy-list {
  margin-top: 20px;
}

.strategy-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
}

.popup-body {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.close-button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
}

.close-button:hover {
  background-color: #d32f2f;
}

.indicator-list {
  width: 40%;
  height: 100%;
  overflow-y: auto;
}

.strategy-content {
  width: 55%;
  height: 100%;
  overflow-y: auto;
}

.indicator-item {
  background-color: #e0e0e0;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: move;
}

.content-item-wrapper {
  position: relative;
}

.content-item {
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.content-item:hover {
  background-color: #e0e0e0;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.delete-button:hover {
  background-color: #d32f2f;
}

.dropzone {
  height: 20px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  border: 2px dashed #ccc;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-content h3, .modal-content h3 {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.popup-content h4, .modal-content h4 {
  margin-bottom: 10px;
}
</style>
