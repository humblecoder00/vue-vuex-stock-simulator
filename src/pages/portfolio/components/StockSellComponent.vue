<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            <b> {{ name }} </b
            ><span style="font-size: 12px; margin-left: 2.5px"
                >(Price: {{ price }} | Quantity: {{ quantity }})</span
            >
        </div>
        <div class="panel-body" style="display: flex">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Quantity"
                    v-model.number="quantityVal"
                />
            </div>
            <button
                class="btn btn-danger"
                style="margin-left: auto"
                :disabled="!quantityVal"
                @click="handleSell"
            >
                Sell
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'price', 'quantity', 'onSell'],
    data() {
        return {
            quantityVal: '',
        }
    },
    methods: {
        handleSell() {
            if (typeof this.quantityVal !== 'number') {
                alert('Please enter a number!')
                // reset the field
                return (this.quantityVal = '')
            }
            this.onSell({ amount: this.quantityVal, name: this.name })
            this.quantityVal = ''
        },
    },
}
</script>
