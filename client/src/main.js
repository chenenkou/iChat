import './assets/main.css'

import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { setupI18n } from './locales'

const app = createApp(App)

app.use(naive)
app.use(router)
app.use(createPinia())
setupI18n(app)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
