// Getters
const funds = (state) => state.accountBalance
const stockList = (state) => state.stocks
const portfolioStocks = (state) => state.portfolio
const savedData = (state) => state.savedData
const getCurrentState = (state) => ({
    accountBalance: state.accountBalance,
    stocks: state.stocks,
    portfolio: state.portfolio,
})

export default {
    funds,
    stockList,
    portfolioStocks,
    savedData,
    getCurrentState,
}
