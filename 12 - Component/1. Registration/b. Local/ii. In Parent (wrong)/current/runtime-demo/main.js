/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const Top = httpVueLoader('./Top.vue');

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    top: Top
  }
});
