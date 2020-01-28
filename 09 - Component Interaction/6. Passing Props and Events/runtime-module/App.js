/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ImportantAnchor from './ImportantAnchor.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    ImportantAnchor
  },
  template: `
    <ImportantAnchor
      href="https://vuejs.org/"
      rel="noopener"
      target="_blank"
      title="Everything about Vue"
    >
      Vue website
    </ImportantAnchor>
  `
};
