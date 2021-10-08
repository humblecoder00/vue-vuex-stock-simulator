import { endDayUtility } from './lib'

// payload recieves stock name and quantity

const buyStock = (state, payload) => {
    // 1 - Calculate the max amount you can buy with the selected stock:
    const maxAmount = Math.floor(
        state.accountBalance / state.stocks[payload.name]
    )

    // 2 - Get the currentCost
    const currentCost = state.stocks[payload.name] * payload.amount

    // 3 - Now validate if the currentCost reaches the max limit for shopping
    const isMaxLimit = currentCost >= state.accountBalance

    // 4 - Decide on buyingCost based on the max limit status
    // if max limit or more, buy all stocks possible with the current accountBalance.
    // Otherwise, create a cost based on params.
    const buyingCost = isMaxLimit
        ? maxAmount * state.stocks[payload.name]
        : payload.amount * state.stocks[payload.name]

    // 5 - Decide on buyingAmount based on the max limit status7
    const buyingAmount = isMaxLimit ? maxAmount : payload.amount

    // 6 - Minus the balance accordingly
    state.accountBalance -= buyingCost

    // 7 - Update the portfolio with related buying action
    state.portfolio[payload.name] += buyingAmount
}

const sellStock = (state, payload) => {
    // 1 - Update the account balance

    // first validate the amount, so we cannot sell more than what we have.
    const isMaxLimit = payload.amount >= state.portfolio[payload.name]

    // if max limit or more, sell all. Otherwise, sell the amount entered.
    const sellingAmount = isMaxLimit
        ? state.portfolio[payload.name] * state.stocks[payload.name]
        : payload.amount * state.stocks[payload.name]

    // 2 - Update the portfolio stock amount:

    // if max limit or more, make it zero. Otherwise, just the minus amount entered.
    const soldQuantity = isMaxLimit
        ? state.portfolio[payload.name]
        : payload.amount

    // 3 - Update the portfolio with related selling action
    state.portfolio[payload.name] -= soldQuantity
    // put back the selling amount back to your accountBalance
    state.accountBalance += sellingAmount
}

const endDay = (state) => {
    // update the stock prices randomly (currently from -50% to 50% per stock)
    const newStockPrices = endDayUtility(state.stocks)
    state.stocks = newStockPrices
}

const loadData = (state) => {
    // load the latest saved data
    state.accountBalance = state.savedData.accountBalance
    state.portfolio = state.savedData.portfolio
    state.stocks = state.savedData.stocks
}

const setInitialData = (state) => {
    // revert back to initial data
    state.accountBalance = 10000
    state.portfolio = {
        BMW: 0,
        Google: 0,
        Apple: 0,
        Twitter: 0,
    }
    state.stocks = {
        BMW: 100,
        Google: 200,
        Apple: 250,
        Twitter: 8,
    }
}

const fetchStuff = (state, payload) => {
    state.accountBalance = payload.accountBalance
    state.portfolio = payload.portfolio
    state.stocks = payload.stocks
}

export default {
    buyStock,
    sellStock,
    endDay,
    loadData,
    setInitialData,
    fetchStuff,
}
