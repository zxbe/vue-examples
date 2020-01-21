/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue-next/dist/vue.esm.js';

Vue.createApp().mount(
  {
    data: {
      name: 'World'
    },
    mounted() {
      // Use $refs to get direct DOM access
      // Useful for focus or selections:
      this.$refs.input.focus();
    }
  },
  '#app'
);
