/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

// Register component globally
Vue.component('greeting-component', GreetingComponent);

// Bootstrap
new Vue({
  el: '#app'
});
