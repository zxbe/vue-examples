/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Child from './Child.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    Child
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
      <Child :name="greetingText" @change="greetingChanged($event)"></Child>
      <h1>Hello {{ greetingText }}</h1>
    </div>
  `
};
