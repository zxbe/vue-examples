/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'GreetingComponent',
  props: { name: String },
  template: '<h1>Hello {{name}}!</h1>'
};
