/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    firstName: 'Evan',
    lastName: 'You',
    fullNameViaWatch: ''
  },
  computed: {
    fullNameViaComputed() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  watch: {
    firstName(value) {
      this.fullNameViaWatch = `${value} ${this.lastName}`;
    },
    lastName(value) {
      this.fullNameViaWatch = `${this.firstName} ${value}`;
    }
  }
});
