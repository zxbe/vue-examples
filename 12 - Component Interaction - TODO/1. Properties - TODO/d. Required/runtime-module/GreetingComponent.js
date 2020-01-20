/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: {
    greet: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  template: '<h1>{{greet}} {{name}}!</h1>'
};
