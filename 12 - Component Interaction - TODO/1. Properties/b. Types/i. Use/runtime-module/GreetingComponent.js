/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */
/* eslint vue/require-default-prop: "off" */

export default {
  name: 'GreetingComponent',
  props: { name: String },
  template: '<h1>Hello {{name}}!</h1>'
};
