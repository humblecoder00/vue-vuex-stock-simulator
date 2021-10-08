<template>
    <div
        style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;
        "
    >
        <template v-for="(value, key) in stockList">
            <stock-buy-component
                :key="key"
                :name="key"
                :price="value"
                :onBuy="buyStock"
            ></stock-buy-component>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import StockBuyComponent from './components/StockBuyComponent.vue'

export default {
    components: {
        stockBuyComponent: StockBuyComponent,
    },
    computed: {
        ...mapGetters('stocks', ['stockList']),
    },
    methods: {
        ...mapActions('stocks', ['buyStock']),
    },
}
</script>
