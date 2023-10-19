// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// createApp(App).use(store).use(router).use(Vuetify).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createVuetify } from 'vuetify' // 수정된 import 문

import 'vuetify/dist/vuetify.min.css'

// Create a Vuetify instance using createVuetify
const vuetify = createVuetify()

createApp(App).use(store).use(router).use(vuetify).mount('#app')
