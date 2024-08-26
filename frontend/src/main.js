import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // 테마
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import axios from 'axios';
if (typeof crypto.randomUUID !== 'function') {
  crypto.randomUUID = () => {
    // uuid를 생성하는 라이브러리를 사용하는 방법
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  };
}

// 기본 경로 설정
axios.defaults.baseURL = 'http://localhost:5000/api';

// Axios 인터셉터 설정
axios.interceptors.response.use(
  response => {
    return response; // 응답이 성공적인 경우 그대로 반환합니다.
  },
  error => {
    if (error.response && error.response.status === 401) {
      // 401 Unauthorized 에러가 발생한 경우 (토큰 만료 등)
      console.error('Token expired or unauthorized access, redirecting to login...');
      // Vuex 상태를 업데이트하여 로그아웃 상태로 변경합니다.
      store.dispatch('logout');
      // 로컬 스토리지에서 토큰을 제거합니다.
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.setItem('rememberMe', 'false');
      // 로그인 페이지로 리다이렉트합니다.
      router.push('/login');
    }
    return Promise.reject(error); // 오류를 그대로 반환합니다.
  }
);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);

app.mount('#app');
