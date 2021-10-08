<template>
    <nav class="navbar navbar-default" style="margin-top: 15px">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link
                    to="/"
                    tag="li"
                    active-class="active"
                    style="list-style: none"
                    exact
                >
                    <a class="navbar-brand">Stock Trader</a></router-link
                >
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
            >
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active"
                        ><a>Portfolio</a></router-link
                    >
                    <router-link to="/stocks" tag="li" active-class="active"
                        ><a>Stocks</a></router-link
                    >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li @click="handleSetToInitial">
                        <a href="#">Reset to Default</a>
                    </li>
                    <li @click="handleEndDay"><a href="#">End Day</a></li>
                    <li
                        class="dropdown"
                        :class="{ open: isDropdownOpen }"
                        @click="isDropdownOpen = !isDropdownOpen"
                    >
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Save & Load <span class="caret"></span
                        ></a>
                        <ul class="dropdown-menu">
                            <li @click="handleSaveData">
                                <a href="#">Save Data</a>
                            </li>
                            <!-- <li @click="handleLoadData"> -->
                            <li @click="handleFetchData">
                                <a href="#">Load Data</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            ><b style="user-select: none"
                                >Funds: ${{ funds }}
                            </b></a
                        >
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isDropdownOpen: false,
        }
    },
    methods: {
        ...mapActions('stocks', [
            'handleEndDay',
            'handleSaveData',
            'handleLoadData',
            'handleSetToInitial',
            'handleFetchData',
        ]),
    },
    computed: {
        ...mapGetters('stocks', ['funds', 'savedData']),
    },
}
</script>
