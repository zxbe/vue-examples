/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'greeting-component': GreetingComponent
  }
});
