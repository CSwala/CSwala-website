import { createApp } from 'vue'
import app from './App.vue'
import router from './router'

createApp(app)
  .use(router).mount('#app')
