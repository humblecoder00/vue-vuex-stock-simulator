<template>
    <div class="container">
        <router-view name="header-top"></router-view>
        <loader-square v-if="isLoading && !isError"></loader-square>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoaderSquare from './components/LoaderSquare.vue'

export default {
    data() {
        return {
            isLoading: true,
            isError: false,
        }
    },
    components: {
        loaderSquare: LoaderSquare,
    },
    methods: {
        ...mapActions('stocks', ['handleFetchData']),
        async getStuff() {
            try {
                await this.handleFetchData()
                this.isLoading = false
            } catch (err) {
                console.log('ERR:', err)
                this.isError = true
            }
        },
    },
    created() {
        this.getStuff()
    },
}
</script>

<style>
.slide-leave-active {
    transition: opacity 0.2s ease;
    opacity: 0;
    animation: slide-out 0.2s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateX(0);
}

.slide-enter-active {
    animation: slide-in 0.2s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
