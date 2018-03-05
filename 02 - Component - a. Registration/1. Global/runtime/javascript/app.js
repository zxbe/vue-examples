/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global Vue */

// Define component
// @vue/component
const GreetingComponent = {
  name: 'GreetingComponent',
  template: '<h1>Hello World!</h1>'
};

// Register component globally
Vue.component('greeting-component', GreetingComponent);

// Bootstrap
new Vue({
  el: '#app'
});
