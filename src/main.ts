import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    components: {App},
    render(h) {
        return h('App', {attrs: {start: 100}})
    }
})