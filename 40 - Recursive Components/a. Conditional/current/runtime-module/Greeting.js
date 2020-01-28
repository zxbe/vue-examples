/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  // name required for recursive components
  name: 'Greeting',
  data() {
    return {
      recursive: false
    };
  },
  template: `
    <div>
      <h1 @click="recursive = true">Hello World!</h1>
      <Greeting v-if="recursive" />
    </div>
  `
};
