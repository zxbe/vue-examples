/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

let obj = new Object();

// Public property with get/set (use private property below)
Object.defineProperty(obj, 'prop1', {
  configurable: true,
  enumerable: true,
  get() {
    return this._prop1;
  },
  set(value) {
    this._prop1 = value;
  }
});

// Private property with the value
Object.defineProperty(obj, '_prop1', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 'initial value'
});

console.log(JSON.stringify(obj));

obj.prop1 = 'a';

console.log(JSON.stringify(obj));
