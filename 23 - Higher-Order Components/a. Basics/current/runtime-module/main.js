/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

import Greeting from './Greeting.js';
import withExtras from './hoc.js';

const GreetingWithExtras = withExtras(Greeting);

new Vue({
  el: '#app',
  components: {
    GreetingWithExtras
  },
  template: '<GreetingWithExtras name="World" extraColor="red" />'
});
