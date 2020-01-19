/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ClickMe_Correct from './ClickMe_Correct.js';
import ClickMe_Incorrect from './ClickMe_Incorrect.js';

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'App',
  components: {
    ClickMe_Correct,
    ClickMe_Incorrect
  },
  template: `
    <div>
      <h1>Data as an object:</h1>
      <ClickMe_Incorrect />
      <br />
      <ClickMe_Incorrect />
      <hr/>
      <h1>Data as a function:</h1>
      <ClickMe_Correct />
      <br />
      <ClickMe_Correct />
    </div>
  `
};
