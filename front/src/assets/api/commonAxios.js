import axios from 'axios';
import store from '@/store';

const instance = (axiosData) => {
  // Show LoadingBar
  store.commit('service/setLoadingBar');
  
  // Request data format handling
  let req = axiosData.request ? axiosData.reqFormat(axiosData.request) : '';

  // Send the Axios request
  axios({
    method: axiosData.method || 'GET',
    url: `/api${axiosData.url}`, // Assuming your backend API is proxied through /api
    headers: {
      Authorization: `Bearer ${store.state.service.login.userToken}` || '',
      'Content-Type': 'application/json',
      ...axiosData.headers
    },
    data: req
  })
  .then((response) => {
    // Hide LoadingBar
    store.commit('service/setLoadingBarClose');
    
    const res = axiosData.resFormat(response.data);

    if (res.code === 100) {
      axiosData.resolve(res);
    } else {
      // Handle other response codes
      console.error('Error in response:', res);
      axiosData.reject(res);
    }
  })
  .catch((error) => {
    // Hide LoadingBar and handle errors
    store.commit('service/setLoadingBarClose');
    console.error('Axios error:', error);
    axiosData.reject(error);
  });
};

export default instance;