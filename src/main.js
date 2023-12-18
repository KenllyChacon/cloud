import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import router from '/src/router/router'

createApp(App).use(router).mount('#app')
