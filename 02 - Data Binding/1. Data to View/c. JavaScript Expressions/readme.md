# JavaScript Expressions

Within Vue template databinding you can use expression, but there are limitations.

## Possible

- Single expressions
  ```js
  'hello '.toUpperCase() + 2020;
  ```
- Globals from [this list](https://github.com/vuejs/vue/blob/v2.6.11/src/core/instance/proxy.js#L9) (v3 [list](https://github.com/vuejs/vue-next/blob/master/packages/shared/src/globalsWhitelist.ts#L3)):
  - Infinity
  - undefined
  - NaN
  - isFinite
  - isNaN
  - parseFloat
  - parseInt
  - decodeURI
  - decodeURIComponent
  - encodeURI
  - encodeURIComponent
  - Math
  - Number
  - Date
  - Array
  - Object
  - Boolean
  - String
  - RegExp
  - Map
  - Set
  - JSON
  - Intl

_[Wikipedia:](<https://en.wikipedia.org/wiki/Expression_(computer*science)>) An expression in a programming language is a combination of one or more constants, variables, operators, and functions that the programming language interprets and computes to produce ("to return") another value.*

## <u>Not</u> Possible

- Statements:
  ```js
  const c = 123;
  ```
- Multiple expressions
  ```js
  if (true) return 'Hello Vue!';
  ```
- Globals not in [this list](https://github.com/vuejs/vue/blob/v2.6.11/src/core/instance/proxy.js#L9), including _your own globals_.

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2019-2020 Rick Beerendonk
