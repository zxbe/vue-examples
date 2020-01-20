/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  template: '<h1>Hello {{ name }}!</h1>'
};
