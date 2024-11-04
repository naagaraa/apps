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

const app = createApp(App)
register()

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})
app.use(MotionPlugin)

app.mount('#app')

// import { createSSRApp, h } from 'vue'
// import PageShell from './App.vue'
// import { setPageContext } from './usePageContext'

// export { createApp }

// function createApp(Page, pageProps, pageContext) {
//   const PageWithLayout = {
//     render() {
//       return h(
//         PageShell,
//         {},
//         {
//           default() {
//             return h(Page, pageProps || {})
//           },
//         },
//       )
//     },
//   }

//   const app = createSSRApp(PageWithLayout)

//   // We make pageContext available from any Vue component
//   setPageContext(app, pageContext)

//   return app
// }
