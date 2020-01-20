/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: ['name'],
  computed: {
    computedName: function() {
      return this.name.trim().toUpperCase();
    }
  },
  template: '<h1>Hello {{computedName}}!</h1>'
};
