import Vue from 'vue'
import App from './App'
import Edit from './Edit'

new Vue({
    el: '#app',
    components: {App},
    render(h) {
        return h('App', {attrs: {start: 100}})
    }
})

new Vue({
    el: '#edit',
    components: {Edit},
    render(h) {
        return h('Edit')
    }
})