<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h3><b>You don't have any stocks in your portfolio yet.</b></h3>
            <h4>Go ahead and buy some stocks!</h4>
            <hr />
            <router-link to="/stocks" tag="button" class="btn btn-success"
                >Buy Stocks</router-link
            >
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoPortfolioComponent',
}
</script>
