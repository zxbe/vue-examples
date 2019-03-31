/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'GreetingComponent',
  props: ['name'],
  template: '<h1>Hello {{name}}!</h1>'
};
