import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/user';
import symbol from './modules/symbol';
import bot from './modules/bot';
import page from './modules/page'; // 페이지 모듈 추가

export default createStore({
  modules: {
    auth,
    user,
    symbol,
    bot,
    page // 페이지 모듈 추가
  }
});
