import { getDataService, saveDataService } from './services'

// Some data here to pass into handleSetToInitial
const base = {
    accountBalance: 10000,
    portfolio: {
        BMW: 0,
        Google: 0,
        Apple: 0,
        Twitter: 0,
    },
    stocks: {
        BMW: 100,
        Google: 200,
        Apple: 250,
        Twitter: 8,
    },
}

// Actions
const buyStock = ({ commit, state }, payload) => {
    commit('buyStock', payload)
}

const sellStock = ({ commit, state }, payload) => {
    commit('sellStock', payload)
}

const handleEndDay = ({ commit, state }, payload) => {
    commit('endDay')
}

// SHOULD NOT MUTATE THE STATE HERE. Do it inside the mutation instead
// Here you'll call a service, which handles calling api. To pass parameters, use getters.
// Don't make the calculations here. That is the service functions job.
const handleSaveData = ({ getters }) => {
    // this will call a service (api function) to save stuff on "Firebase"
    saveDataService(getters.getCurrentState)
}

const handleLoadData = ({ commit }) => {
    // this will call a service (api function) to load stuff on "Firebase"
    commit('loadData')
}

const handleSetToInitial = ({ commit }) => {
    // set everything back to initial values with optimistic update (updates front-end first)
    commit('setInitialData')
    saveDataService(base)
}

// async
const handleFetchData = async ({ commit }) => {
    const fetchedStuff = await getDataService()
    commit('fetchStuff', fetchedStuff)
}

export default {
    buyStock,
    sellStock,
    handleEndDay,
    handleSaveData,
    handleLoadData,
    handleSetToInitial,
    handleFetchData,
}
