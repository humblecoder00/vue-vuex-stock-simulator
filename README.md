# Vue & Vuex stock trading simulator

Extended version of the exercise project `stock-trader` from `Vue JS 2 - The Complete Guide` course made by Maximilian Schwarzmüller.

### Live version:

https://vue-vuex-stock-simulator.netlify.app/

### Description:

Serverless single-page application that simulates stock trading.

### Features:

-   You start with \$10.000 in your account balance, can buy stocks listed.
-   By clicking on `"End Day"`, stock prices gets randomized. You can buy or sell if these random changes makes sense.
-   You can save and load your current stocks portfolio and stock prices at any point of time.
-   You can also use `"Reset to Default"` to set everything to the initial start point. `(extended addition)`

### Technologies used:

-   Vue.js 2.0 + Vuex
-   Axios for handling HTTP `(extended addition)`
-   Bootstrap
-   Google Firebase realtime database as backend
-   Webpack

### Extended additions list:

-   Used `axios` instead of `vue-resource` to handle HTTP.
-   Applied a "Reset to Default" functionality to set back the app on it's initial start point.
-   Installed `"dotenv-webpack"` npm package, and extended `webpack.config.js` by adding this package as a plugin to make the app being able to handle environment secrets.
-   Applied lazy loading on routes.
-   Applied feature-based approach to include **Seperation of Concerns** design principle in code structure.

# Structure

```bash
├── src # contains Vue related code
│   ├── assets # contains media files.
│   ├── components  # contains common UI components used overall the app
│   ├   ├─── Header.vue
│   ├   ├─── LoaderSquare.vue
│   ├   ├─── ....
│   ├── lib  # contains common utilities used overall the app
│   ├── pages  # PAGES - contains views (pages)
│   ├   ├─── stocks # (contains page specific container + components)
│   ├   ├        ├─── components # holds ONLY page specific components
│   ├   ├        ├        ├─── StockBuyComponent.vue # page scoped component
│   ├   ├        ├        ├─── ........
│   ├   ├        ├─── Stocks.vue # container component (PAGE)
│   ├   ├─── ........
│   ├── services  # contains global level services that can be used overall the app, (example: axios)
│   ├   ├─── api-axios-instance.js # main axios instance
│   ├── store  # contains Vuex
│   ├   ├─── feature-stocks # (or any vuex feature that has a state)
│   ├   ├        ├─── actions.js # contains actions, imports api calls from services.js
│   ├   ├        ├─── getters.js # contains getters
│   ├   ├        ├─── mutations.js # contains mutations
│   ├   ├        ├─── services.js # only api calls, which will be used by actions
│   ├   ├        ├─── lib.js # contains feature scoped utility functions
│   ├   ├        ├─── index.js # exports the feature to main store & includes piece of state scoped to feature
│   ├   ├─── .......
│   ├   ├─── index.js  # contains & exports Vuex instance with features
│   ├── App.vue
│   ├── main.js # main Vue instance
│   ├── router.js # holds router information
├── .env # contains environment secrets
├── .env.example # contains .env example
├── index.html # App entry point
└── .....
```

# How to

### Install dependencies

npm install

### Serve with hot reload at localhost:8080

npm run dev

### Build for production with minification

npm run build

### Use your own firebase database

-   Create a realtime database at Fireship.
-   Create an `.env` file at root level, then place your database url following the example at `.env.example`.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
