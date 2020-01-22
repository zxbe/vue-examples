/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  props: ['value'], // must be "value" to use with v-model
  methods: {
    changed(e) {
      this.$emit(
        'input', // Must be "input" to use with v-model
        e.target.value
      );
    }
  },
  template: '<input :value="value" @keyup="changed" />'
};
