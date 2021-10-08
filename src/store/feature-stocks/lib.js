import { randomInt } from '../../lib/numbers'

// mock a single stock price with random percentage.
const mockStock = (price) => {
    const range = randomInt(-50, 50) // between 0.5 to 1.5, in other words -50% to +50%
    const perc = range / 100
    const finalPerc = perc < 0 ? perc : perc + 1
    // perc result:
    const percResult = price * finalPerc
    // If percResult is less than zero, plus the number itself.
    // Otherwise, return the number (on plus)
    const finalResult = percResult < 0 ? price + percResult : percResult
    return Math.floor(finalResult)
}

// update the stock values with randomized percentage by going through the stocks object:
export const endDayUtility = (stocks) => {
    Object.entries(stocks).forEach(
        ([key, val]) => (stocks[key] = mockStock(val))
    )
    return stocks
}
