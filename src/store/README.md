### Store structure

-   This Vuex store follows feature-based approach, using namespaced modules.
-   Each feature includes 5 base pieces, and they are scoped to that feature:

**actions.js** - Contains feature related actions. To call an api, actions use functions from `services.js`

**getters.js** - Contains feature related getters.

**mutations.js** - Contains feature related mutations.

**services.js** - Contains functions that calls an api or makes different calculations. Service functions are used inside actions.

**lib.js** - Contains utility functions that is scoped to the feature. If there are many utilities, create a lib folder, then store your utility modules like `lib/someUtil.js`, `lib/anotherUtil.js`, etc.

**index.js** - Contains the initial state for the feature & then exports the actions, getters and mutations as namespaced modules to main instance.

-   At the root level, `store.js` exports all features.
