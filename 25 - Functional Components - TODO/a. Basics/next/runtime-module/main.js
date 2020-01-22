/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

import Greeting from './Greeting.js';
import GreetingFC from './GreetingFC.js';

// Bootstrap
const app = Vue.createApp();
app.component('greeting', Greeting);
app.component('greetingFC', GreetingFC);
app.mount(
  {
    template: `
      <greeting />
      <greetingFC />
    `
  },
  '#app'
);
