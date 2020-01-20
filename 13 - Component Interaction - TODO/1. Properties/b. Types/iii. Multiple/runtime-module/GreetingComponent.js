/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-default-prop: "off" */

export default {
  name: 'GreetingComponent',
  props: { name: [String, Number] },
  template: '<h1>Hello {{name}}!</h1>'
};
