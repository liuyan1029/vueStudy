import { App } from 'vue';
import bigWheel from './big-wheel';

export default {
  install(app: App) {
    app.use(bigWheel);
  },
};
