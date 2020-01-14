/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  methods: {
    parentClicked: function(event) {
      console.log(
        `${event.currentTarget.id} received event for ${event.target.id}.`
      );
    },
    childClicked: function(event) {
      console.log(`${event.target.id} received event.`);
    }
  }
});
