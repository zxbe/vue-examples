/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: {
    name: {
      type: String,
      validator(value) {
        // Check first character is in upper case
        return value.length && value[0] === value[0].toUpperCase();
      }
    }
  },
  template: '<h1>Hello {{name}}!</h1>'
};
