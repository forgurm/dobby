import axios from 'axios';
import store from '@/store';

// Axios 기본 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/api', // 모든 요청에 /api 경로가 자동으로 추가됨
  headers: {
    'Content-Type': 'application/json',
  }
});

const instance = (axiosData) => {
  store.commit('service/setLoadingBar');
  
  let req = axiosData.request ? axiosData.reqFormat(axiosData.request) : '';

  axiosInstance({
    method: axiosData.method || 'GET',
    url: axiosData.url, // url에는 /api 이후 경로만 넣으면 됩니다.
    headers: {
      Authorization: `Bearer ${store.state.service.login.userToken}` || '',
      ...axiosData.headers
    },
    data: req
  })
  .then((response) => {
    store.commit('service/setLoadingBarClose');
    const res = axiosData.resFormat(response.data);
    axiosData.resolve(res);
  })
  .catch((error) => {
    store.commit('service/setLoadingBarClose');
    console.error('Axios error:', error);
    axiosData.reject(error);
  });
};

export default instance;