/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue-next/dist/vue.esm.js';

Vue.createApp().mount(
  {
    data: {
      count: 0,
      change: ''
    },
    watch: {
      count(newValue, oldValue) {
        this.change = `Changed from ${oldValue} to ${newValue}`;
      }
    }
  },
  '#app'
);
