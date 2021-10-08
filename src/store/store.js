import Vue from 'vue'
import Vuex from 'vuex'

import stocksFeature from './feature-stocks'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        stocks: stocksFeature,
    },
})
