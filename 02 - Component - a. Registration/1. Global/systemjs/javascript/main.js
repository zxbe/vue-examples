/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from 'vue';

import Greeting from 'greeting';

// Register component globally
Vue.component('greeting', Greeting);

// Bootstrap
new Vue({
  el: '#app'
});
