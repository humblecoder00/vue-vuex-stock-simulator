### Pages

-   Contains View (page) components along with page specific UI components.
-   Main .vue file inside the page folder is always the View (page) component. Which can be used as a Container component.
-   A container has direct access to Vuex store, then passes the data to it's child components.
-   It would be ideal to keep the roles seperate with Containers and Components for consistency.
-   If a page has page specific components, place them inside components folder, like: `your-page-name/components/YourPageComp.vue`
-   If page uses common components, no need to open a component folder. In that case, you can have your page like: `your-page-name/YourPageName.vue`
