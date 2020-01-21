/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  methods: {
    buttonClicked() {
      this.$emit('updated');
    }
  },
  template: '<button @click="buttonClicked()">Click</button>'
};
