/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  props: ['name'],
  methods: {
    changed(e) {
      // Avoid accessing the parent directly
      this.$parent.greetingText = e.target.value;
    }
  },
  template: '<input :value="name" @keyup="changed" />'
};
