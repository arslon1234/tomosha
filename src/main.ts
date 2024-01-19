import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from './plugins/i18n'

const app = createApp(App);
app.provide('i18n', i18n);
app.use(router);
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
