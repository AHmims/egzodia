import {createApp} from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import {createPinia} from 'pinia';
import Home from './views/Home.vue';
import About from './views/About.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},

  ]
});

const vueApp = createApp(App);

vueApp.use(createPinia());
vueApp.use(router);

vueApp.mount('#app');
