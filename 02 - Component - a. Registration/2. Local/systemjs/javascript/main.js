/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from 'vue';

import GreetingComponent from 'GreetingComponent';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'greeting-component': GreetingComponent
  }
});
