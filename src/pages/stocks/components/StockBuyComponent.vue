<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <b> {{ name }} </b
            ><span style="font-size: 12px; margin-left: 2.5px"
                >(Price: {{ price }})</span
            >
        </div>
        <div class="panel-body" style="display: flex">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Quantity"
                    v-model.number="quantity"
                />
            </div>
            <button
                class="btn btn-success"
                style="margin-left: auto"
                :disabled="!quantity"
                @click="handleBuy"
            >
                Buy
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: Number,
        onBuy: Function,
    },
    data() {
        return {
            quantity: '',
        }
    },
    methods: {
        // this is handled here to be able to cleanup the text field after submit
        handleBuy() {
            // minimalistic validator
            if (typeof this.quantity !== 'number') {
                alert('Please enter a number!')
                // reset the field
                return (this.quantity = '')
            }

            this.onBuy({ amount: this.quantity, name: this.name })
            this.quantity = ''
        },
    },
}
</script>
