/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'GreetingFC',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render(createElement, context) {
    return createElement('h1', [
      'Hello ',
      context.props.name,
      '! (functional)'
    ]);
  }
};
