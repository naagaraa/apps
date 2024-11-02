import { createApp } from 'vue'
import { createPinia } from 'pinia'

// swiper
import { register } from 'swiper/element/bundle'

// import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'bootstrap/dist/css/bootstrap-reboot.min.css'
// import 'bootstrap'

import App from './App.vue'
import router from './router'

// tailwind css
import './assets/index.css'

const app = createApp(App)
register()

app.use(createPinia())
app.use(router)

app.mount('#app')
