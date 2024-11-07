import { createApp } from 'vue'
import { createPinia } from 'pinia'

// motion
import { MotionPlugin } from '@vueuse/motion'

// swiper
import { register } from 'swiper/element/bundle'

// calendar
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

// app and router
import App from './App.vue'
import router from './router'

// tailwind css
import './assets/index.css'

import { onLCP, onINP, onCLS } from 'web-vitals'

onCLS(console.log)
onINP(console.log)
onLCP(console.log)

const app = createApp(App)
register()

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})
app.use(MotionPlugin)

app.mount('#app')
