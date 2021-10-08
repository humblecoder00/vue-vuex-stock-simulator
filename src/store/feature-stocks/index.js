import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
    // initial state
    accountBalance: 0,
    portfolio: {
        // stock names & quantity
    },
    stocks: {
        // stock names & price
    },
})

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
