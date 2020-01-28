/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const App = httpVueLoader('./App.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    App
  }
});
