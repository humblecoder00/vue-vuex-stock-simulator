<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h2><b>Trade or View your Portfolio</b></h2>
            <p>You may Save & Load your Data</p>
            <p>Click "End Day" to begin a new Day!</p>
            <hr />
            <h4>
                <b>Your funds: ${{ funds }} </b>
            </h4>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('stocks', ['funds']),
    },
}
</script>
