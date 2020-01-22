/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');
const OtherComponent = httpVueLoader('./OtherComponent.vue');

// Register component globally
Vue.component('greeting-component', GreetingComponent);
Vue.component('other-component', OtherComponent);

// Bootstrap
new Vue({
  el: '#app'
});
