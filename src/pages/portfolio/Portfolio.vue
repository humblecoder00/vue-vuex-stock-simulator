<template>
    <div>
        <no-portfolio-component v-if="!hasPortfolio"></no-portfolio-component>
        <div
            style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;
        "
        >
            <template v-for="(value, key) in portfolioStocks">
                <stock-sell-component
                    v-if="value"
                    :key="key"
                    :name="key"
                    :price="stockList[key]"
                    :quantity="value"
                    :onSell="sellStock"
                ></stock-sell-component>
            </template>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import StockSellComponent from './components/StockSellComponent.vue'
import NoPortfolioComponent from './components/NoPortfolioComponent.vue'

export default {
    components: {
        stockSellComponent: StockSellComponent,
        noPortfolioComponent: NoPortfolioComponent,
    },
    computed: {
        ...mapGetters('stocks', ['portfolioStocks', 'stockList']),
        hasPortfolio: function() {
            let total = 0
            for (let key in this.portfolioStocks) {
                total += this.portfolioStocks[key]
            }

            if (total > 0) return true
            return false
        },
    },
    methods: {
        ...mapActions('stocks', ['sellStock']),
    },
}
</script>
