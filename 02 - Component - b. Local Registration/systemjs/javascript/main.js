/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from 'vue';

import Greeting from 'greeting';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'greeting': Greeting
  }
});
