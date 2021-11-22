import { App, defineAsyncComponent } from 'vue';
// import BigWheel from './BigWheel.vue';

export default {
  install(app: App): void {
    // debugger;
    // app.component('BigWheel', BigWheel);
    app.component('BigWheel', defineAsyncComponent(() => import(/* webpackChunkName: "BigWheel" */ './BigWheel.vue')));
  },
};
