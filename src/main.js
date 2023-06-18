import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router'
import Notifications from '@kyvg/vue3-notification'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faListSquares, faGrip } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faListSquares, faGrip)

createApp(App)
  .use(pinia)
  .use(VueAxios, axios)
  .use(router)
  .use(Notifications)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')