import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/nucleo-icons.scss'
import './assets/css/nucleo-svg.scss'
import './assets/scss/soft-ui-dashboard.scss'

const app = createApp(App)

app.use(store).use(router).use(VueAxios, axios).mount('#app')
