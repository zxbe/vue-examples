/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    result: []
  },
  methods: {
    parentCapturingClicked: function(event) {
      this.result.push(
        `${event.currentTarget.id} received event for ${event.target.id} in capturing fase.`
      );
    },
    parentAtTargetClicked: function(event) {
      this.result.push(`${event.target.id} received event in at target fase.`);
    },
    parentBubblingClicked: function(event) {
      this.result.push(
        `${event.currentTarget.id} received event for ${event.target.id} in bubbling fase.`
      );
    },
    childClicked: function(event) {
      this.result.push(`${event.target.id} received event.`);
    }
  }
});
