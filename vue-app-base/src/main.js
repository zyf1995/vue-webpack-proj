import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

import './style.less'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

const fn = () => {
    console.log('============ main.js is working~ ============')
}
fn()
