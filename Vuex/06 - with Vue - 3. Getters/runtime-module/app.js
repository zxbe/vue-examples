/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { mapGetters } from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

export default {
  name: 'App',
  computed: {
    // Directly
    females() {
      return this.$store.getters.females;
    },

    // Using mapGetters helper
    ...mapGetters(['femaleCount', 'fromCountry'])
  },
  template: `
    <ul>
      <li>
        <u>Females:</u>
        {{ females }}
      </li>
      <li>
        <u>Female count:</u>
        {{ femaleCount }}
      </li>
      <li>
        <u>From country (NL):</u>
        {{ fromCountry('NL') }}
      </li>
    </ul>
  `
};
