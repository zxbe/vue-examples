/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global Vue */

// Define component
const Greeting = {
  template: '<h1>Hello World!</h1>'
};

// Register component globally
Vue.component('greeting', Greeting);

// Bootstrap
new Vue({
  el: '#app'
});
