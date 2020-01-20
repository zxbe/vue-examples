/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Bottom from './Bottom.js';
import Middle from './Middle.js';

export default {
  name: 'Top',
  components: {
    Bottom,
    Middle
  },
  template: `
    <div>
      <h1>Top</h1>
      <Middle />
    </div>
  `
};
