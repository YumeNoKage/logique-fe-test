// style third part
// import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// Local style
import "@/assets/style/index.css"

// third part components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jQuery from 'jquery'

axios.defaults.baseURL = 'https://itunes.apple.com'

window.jQuery = window.$ = jQuery
const app = createApp(App)


app.use(store).use(router).mount('#app')
