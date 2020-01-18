/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

import Greeting from './Greeting.js';
import GreetingFC from './GreetingFC.js';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    greeting: Greeting,
    greetingfc: GreetingFC
  },
  template: `
    <div>
      <greeting />
      <greetingfc />
    </div>
  `
});
