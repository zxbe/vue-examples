/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Greeting from './Greeting.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    greeting: Greeting
  },
  data: function() {
    return {
      greetingText: 'World'
    };
  },
  methods: {
    greetingChanged: function(value) {
      this.greetingText = value;
    }
  },
  template: `
    <div>
      <greeting :name="greetingText" @change="greetingChanged($event)"></greeting>
      <h1>Hello {{ greetingText }}</h1>
    </div>
  `
};
