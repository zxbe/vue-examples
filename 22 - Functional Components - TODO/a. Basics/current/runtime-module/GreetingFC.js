/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// @vue/component
export default {
  name: 'GreetingFC',
  functional: true,
  render(createElement) {
    return createElement('h1', ['Hello Vue! (functional)']);
  }
};
