/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let target = ['first', 'second'];
let handler = {
  get(target, prop /*, receiver */) {
    return target[prop] + ' (changed through Proxy)';
  },
  set(target, prop, value /*, receiver */) {
    target[prop] = value + ' (changed through Proxy)';
    return true;
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy[0]); // first (changed through Proxy)

proxy[0] = 'test';

console.log(target[0]); // test (changed through Proxy)
