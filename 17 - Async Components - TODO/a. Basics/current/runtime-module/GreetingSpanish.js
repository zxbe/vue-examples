/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// @vue/component
export default {
  name: 'GreetingSpanish',
  data() {
    return {
      greeting: 'Mundo'
    };
  },
  template: `
    <div>
      <label>Spanish: <input v-model="greeting" /></label>
      <p>Hola {{ greeting }}</p>
    </div>
  `
};
