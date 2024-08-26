<template>
  <div class="main-page">
    <header class="header">
      <button class="hamburger" @click="toggleMenu">&#9776;</button>
      <h2 class="title">{{ pageTitle }}</h2> <!-- 동적으로 페이지 제목 변경 -->
    </header>
    <nav class="sidebar" :class="{ open: isMenuOpen }">
      <div class="sidebar-header">
        <button class="close-button" @click="toggleMenu">X</button>
      </div>
      <div class="menu-sections">
        <div class="menu-section">
          <div class="menu-title">공통</div>
          <div class="menu-items">
            <button @click="navigateTo('/main', '대시보드')" :class="{ 'selected': currentRoute === '/main' }" class="menu-button">대시보드</button>
            <button @click="navigateTo('/main/memberlist', '회원관리')" :class="{ 'selected': currentRoute === '/main/memberlist' }" class="menu-button">회원관리</button>
            <button @click="navigateTo('/main/botlist', '봇리스트')" :class="{ 'selected': currentRoute === '/main/botlist' }" class="menu-button">봇리스트</button>
            <button @click="navigateTo('/main/account', '회계')" :class="{ 'selected': currentRoute === '/main/account' }" class="menu-button">회계</button>
            <button @click="navigateTo('/main/schedule', '스케쥴')" :class="{ 'selected': currentRoute === '/main/schedule' }" class="menu-button">스케쥴</button>
            <button @click="navigateTo('/main/notice', '공지사항')" :class="{ 'selected': currentRoute === '/main/notice' }" class="menu-button">공지사항</button>
            <button @click="navigateTo('/main/qna', '질문답변')" :class="{ 'selected': currentRoute === '/main/qna' }" class="menu-button">질문답변</button>
            <button @click="navigateTo('/main/edu', '교육자료')" :class="{ 'selected': currentRoute === '/main/edu' }" class="menu-button">교육자료</button>
            <button class="menu-button" @click="toggleSubMenu('publicSettings')">공통설정</button>
            <div class="submenu" v-if="subMenuStatus.publicSettings">
              <button @click="navigateTo('/main/publicsettings/symbol', '심볼')" :class="{ 'selected': currentRoute === '/main/publicsettings/symbol' }" class="submenu-button">심볼</button>
              <button @click="navigateTo('/main/publicsettings/other', '기타')" :class="{ 'selected': currentRoute === '/main/publicsettings/other' }" class="submenu-button">기타</button>
            </div>
          </div>
        </div>
        <div class="menu-section">
          <div class="menu-title">개인</div>
          <div class="menu-items">
            <button @click="navigateTo('/main/private', '매매일지')" :class="{ 'selected': currentRoute === '/main/private' }" class="menu-button">매매일지</button>
            <button class="menu-button" @click="toggleSubMenu('autoTrade')">자동매매</button>
            <div class="submenu" v-if="subMenuStatus.autoTrade">
              <button @click="navigateTo('/main/autotrade/backtest', '백테스트')" :class="{ 'selected': currentRoute === '/main/autotrade/backtest' }" class="submenu-button">백테스트</button>
              <button @click="navigateTo('/main/autotrade/strategy', '전략')" :class="{ 'selected': currentRoute === '/main/autotrade/strategy' }" class="submenu-button">전략</button>
            </div>
            <button @click="navigateTo('/main/privatesetting', '개인설정')" :class="{ 'selected': currentRoute === '/main/privatesetting' }" class="menu-button">개인설정</button>
            <button @click.prevent="handleLogout" class="menu-button">로그아웃</button>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      <router-view @route-changed="updatePageTitle"></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainPage',
  data() {
    return {
      isMenuOpen: false,
      subMenuStatus: {
        publicSettings: false,
        autoTrade: false
      },
      pageTitle: '대시보드',  // 기본 타이틀 설정
      currentRoute: this.$route.path  // 현재 경로 저장
    };
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push('/');
      this.closeMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleSubMenu(menu) {
      this.subMenuStatus[menu] = !this.subMenuStatus[menu];
    },
    navigateTo(route, title) {
      this.$router.push(route);
      this.pageTitle = title;  // 페이지 제목 업데이트
      this.currentRoute = route;  // 현재 경로 업데이트
      this.closeMenu();
    },
    updatePageTitle(title) {
      this.pageTitle = title;
    }
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;  // 라우트 변경 시 현재 경로 업데이트
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body, html {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 페이지 높이를 100vh로 조정 */
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001; /* 상단 메뉴의 z-index 설정 */
}

.hamburger {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.title {
  margin-left: 10px;
  font-size: 20px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1002; /* 사이드 메뉴의 z-index 설정 */
  overflow-y: auto;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #444;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.menu-sections {
  padding: 10px;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
  text-align: center;
}

.menu-items {
  display: flex;
  flex-direction: column;
}

.menu-button {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 100%;
}

.menu-button:hover {
  background-color: #555;
}

.menu-button.selected {
  background-color: #555; /* 선택된 메뉴의 배경색 */
}

.submenu-button {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: calc(100% - 40px);
  margin-left: 20px;
}

.submenu-button:hover {
  background-color: #555;
}

.submenu-button.selected {
  background-color: #555; /* 선택된 서브메뉴의 배경색 */
}

.content {
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - 50px); /* 헤더 높이만큼 높이 조정 */
  padding: 10px;
  margin-top: 50px; /* 헤더 높이만큼 마진 추가 */
}

.section {
  margin: 0; /* 섹션의 마진 제거 */
  padding: 10px; /* 섹션의 패딩 추가 */
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
