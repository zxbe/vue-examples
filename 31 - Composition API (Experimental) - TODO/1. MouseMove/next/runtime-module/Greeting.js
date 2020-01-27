/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import useMousePosition from './mousepos.js';

export default {
  name: 'Greeting',
  template: `
    <h1>Hello World!</h1>
    <div>
      Mouse position: x {{ x }} / y {{ y }}
    </div>
  `,
  data() {
    const { x, y } = useMousePosition();
    return {
      x,
      y
    };
  }
};
