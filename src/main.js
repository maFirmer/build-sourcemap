import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import ErrorStackParser from 'error-stack-parser'
import {getErrorCodeFromgetSourcemap } from './common/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App);

app.config.errorHandler = (err,vm) => {

    const errorStack = ErrorStackParser.parse(err);

    const js_err_data ={
        name: err.name,
        message: err.message,
        stack: err.stack,
        err_stack_list: errorStack
    }
    localStorage.setItem('js_err_data',JSON.stringify(js_err_data))
    vm.$ElMessage.error(`触发错误：${err.message}`)
    // getErrorCodeFromgetSourcemap(errorStack[0])
 
}

app
.use(ElementPlus)
.use(pinia)
.use(router)
.mount('#app')
