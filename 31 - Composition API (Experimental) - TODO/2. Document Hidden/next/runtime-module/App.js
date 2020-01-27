/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import useIsDocumentHidden from './document-hidden.js';

export default {
  name: 'Greeting',
  template: `
    <h1>Document is {{ isHidden ? 'Hidden' : 'Visible' }}!</h1>
  `,
  data() {
    return {
      isHidden: useIsDocumentHidden()
    };
  }
};
