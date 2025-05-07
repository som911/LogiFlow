import './assets/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global_app'
const app = createApp(App)

app.use(router)

app.mount('#app')
