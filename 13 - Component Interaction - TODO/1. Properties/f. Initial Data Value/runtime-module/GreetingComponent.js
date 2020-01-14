/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'GreetingComponent',
  props: ['initialName'],
  data: function() {
    return {
      name: this.initialName
    };
  },
  template: `
    <div>
      <input v-model="name" />
      <h1>Hello {{ name }}!</h1>
    </div>
  `
};
