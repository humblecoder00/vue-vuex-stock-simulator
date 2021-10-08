import Header from './components/Header.vue'

// LAZY LOADING (per route)
const Home = (resolve) => {
    require.ensure(['./pages/home/Home.vue'], () => {
        resolve(require('./pages/home/Home.vue'))
    })
}

const Portfolio = (resolve) => {
    require.ensure(['./pages/portfolio/Portfolio.vue'], () => {
        resolve(require('./pages/portfolio/Portfolio.vue'))
    })
}

const Stocks = (resolve) => {
    require.ensure(['./pages/stocks/Stocks.vue'], () => {
        resolve(require('./pages/stocks/Stocks.vue'))
    })
}

export const routes = [
    {
        path: '',
        components: {
            default: Home,
            'header-top': Header,
        },
        name: 'home',
    },
    {
        path: '/portfolio',
        components: {
            default: Portfolio,
            'header-top': Header,
        },
        name: 'portfolio',
    },
    {
        path: '/stocks',
        components: {
            default: Stocks,
            'header-top': Header,
        },
        name: 'stocks',
    },
    // Some routing examples:
    // {
    //     path: '/user',
    //     components: {
    //         default: User,
    //         'header-bottom': Header,
    //     },
    //     children: [
    //         { path: '', component: UserStart },
    //         {
    //             path: ':id',
    //             component: UserDetail,
    //             // check on the route level
    //             beforeEnter: (to, from, next) => {
    //                 console.log('inside route setup')
    //                 next()
    //             },
    //         },
    //         { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    //     ],
    // },
    // { path: '/redirect-me', redirect: '/user' },
    // { path: '/redirect-me', redirect: { name: 'userEdit' } },
    // wild-card:
    { path: '*', redirect: '/' },
]
