import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import ErrorStackParser from 'error-stack-parser'
import {getErrorCodeFromgetSourcemap } from './common/index'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App);

app.config.errorHandler = (err,vm) => {

    const errorStack = ErrorStackParser.parse(err);
    getErrorCodeFromgetSourcemap(errorStack[0])
    console.log(err);
}


app.use(pinia) 
app.use(router)
app.mount('#app')
