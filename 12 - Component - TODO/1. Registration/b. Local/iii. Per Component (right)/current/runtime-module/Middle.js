/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Bottom from './Bottom.js';

export default {
  name: 'Middle',
  components: {
    Bottom
  },
  template: `
    <div>
      <h2>Middle</h2>
      <Bottom />
    </div>
  `
};
