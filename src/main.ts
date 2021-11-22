import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import BigWheel from '@/widgets/big-wheel';
import widgets from '@/widgets';

createApp(App)
  .use(widgets)
  .use(store)
  .use(router)
  .mount('#app');
