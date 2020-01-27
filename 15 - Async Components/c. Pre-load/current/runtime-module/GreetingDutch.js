/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'GreetingDutch',
  data() {
    return {
      greeting: 'Wereld'
    };
  },
  template: `
    <div>
      <label>Dutch: <input v-model="greeting" /></label>
      <p>Hallo {{ greeting }}</p>
    </div>
  `
};
