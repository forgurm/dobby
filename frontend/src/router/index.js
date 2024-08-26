import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';
import DashboardPage from '../views/DashboardPage.vue';
import MemberListPage from '../views/MemberListPage.vue';
import BotListPage from '../views/BotListPage.vue';
import AutoTradePage from '../views/AutoTradePage.vue';
import BacktestPage from '../views/BacktestPage.vue';
import StrategyPage from '../views/StrategyPage.vue';
import SchedulePage from '../views/SchedulePage.vue';
import AccountPage from '../views/AccountPage.vue';
import NoticeBoardPage from '../views/NoticeBoardPage.vue';
import QnaBoardPage from '../views/QnaBoardPage.vue';
import EduBoardPage from '../views/EduBoardPage.vue';
import PrivateBoardPage from '../views/PrivateBoardPage.vue';
import SettingsPage from '../views/PublicSettingsPage.vue';
import SymbolPage from '../views/SymbolPage.vue';
import OtherPage from '../views/OtherPage.vue';
import PrivateSettingsPage from '../views/PrivateSettingsPage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { 
    path: '/main', 
    component: MainPage,
    children: [
      { path: '', component: DashboardPage },
      { path: 'memberlist', component: MemberListPage },
      { path: 'botlist', component: BotListPage },
      { path: 'account', component: AccountPage },
      { path: 'schedule', component: SchedulePage },
      { path: 'notice', component: NoticeBoardPage },
      { path: 'qna', component: QnaBoardPage },
      { path: 'edu', component: EduBoardPage },
      { path: 'private', component: PrivateBoardPage },
      { path: 'privatesetting', component: PrivateSettingsPage },
      { 
        path: 'autotrade', 
        component: AutoTradePage,
        children: [
          { path: 'backtest', component: BacktestPage },
          { path: 'strategy', component: StrategyPage }
        ]
      },
      { 
        path: 'publicsettings', 
        component: SettingsPage,
        children: [
          { path: 'symbol', component: SymbolPage },
          { path: 'other', component: OtherPage }
        ]
      },
      {
        path: 'symbols/:exchangeCode',
        name: 'SymbolPage',
        component: SymbolPage,
        props: true,
        beforeEnter: (to, from, next) => {
          document.title = '심볼';
          next();
        }
      }
    ],
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;
  console.log(`Navigation Guard: isLoggedIn=${isLoggedIn}, to=${to.path}`);
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    console.log('Redirecting to /');
    next('/');
  } else if (to.path === '/' && isLoggedIn) {
    console.log('Redirecting to /main');
    next('/main');
  } else {
    next();
  }
});

// Global beforeEach guard
router.beforeEach((to, from, next) => {
  if (to.name === 'SymbolPage') {
    document.title = '심볼';
  }
  next();
});
export default router;