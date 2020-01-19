/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ClickMe from './ClickMe.js';

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'App',
  components: {
    ClickMe
  },
  data() {
    return {
      count: 0
    };
  },
  template: `
    <div>
      <button @click="count++">Click me!</button>
      <br />
      <ClickMe :key="count" />
    </div>
  `
};
