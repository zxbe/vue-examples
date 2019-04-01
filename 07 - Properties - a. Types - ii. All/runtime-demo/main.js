/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const MyComponent = httpVueLoader('./MyComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'my-component': MyComponent
  }
});
