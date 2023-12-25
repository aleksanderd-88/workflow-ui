import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/layouts/App.vue'
import router from '@/router'

import naive from 'naive-ui'

const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(router)

app.mount('#app')
