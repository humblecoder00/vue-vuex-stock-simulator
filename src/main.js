import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App.vue'
// import { routes } from './routes'
import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
    routes, // routes: routes
    // default has 'hash' mode, this will set the history mode (regular router):
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // use this if you want user to go back to the position before
        if (savedPosition) {
            return savedPosition
        }
        // we scroll only if hash exists
        if (to.hash) {
            return {
                selector: to.hash,
            }
        }
        // scroll to the top as fallback (optional)
        return { x: 0, y: 0 }
    },
})

export const vm = new Vue({
    el: '#app',
    store,
    router, // router: router
    render: (h) => h(App),
    components: { App },
    template: '<App/>',
})
