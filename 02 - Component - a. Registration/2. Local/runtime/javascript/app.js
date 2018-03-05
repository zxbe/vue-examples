/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global Vue */

// Define component
// @vue/component
const GreetingComponent = {
  name: 'GreetingComponent',
  template: '<h1>Hello World!</h1>'
};

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'greeting-component': GreetingComponent
  }
});
