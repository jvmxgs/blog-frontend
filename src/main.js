import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import VueGtag from "vue-gtag-next";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faListSquares, faGrip } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faListSquares, faGrip)

createApp(App)
  .use(pinia)
  .use(VueAxios, axios)
  .use(router)
  .use(Notifications)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueGtag, {
    property: {
      id: import.meta.env.VITE_GTAG_ID
    }
  })
  .mount('#app')
