/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    name: 'World'
  },
  mounted() {
    // Use $refs to get direct DOM access
    // Useful for focus or selections:
    this.$refs.input.focus();
  }
});
