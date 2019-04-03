/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'GreetingComponent',
  props: ['yourName' /* camelCase */],
  template: '<h1>Hello {{yourName}}!</h1>'
};
