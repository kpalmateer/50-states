import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

// import router
import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

// use the router
app.use(router)
app.mount('#app')