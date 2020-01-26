/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

import Greeting from './Greeting.js';
import MouseMove from './MouseMove.js';

new Vue({
  el: '#app',
  components: {
    Greeting,
    MouseMove
  },
  template: `
    <mouse-move v-slot="{ x, y }">
      <Greeting 
        :name="'(x:' + x + ', y: ' + y + ')'"
      />
    </mouse-move>
  `
});
