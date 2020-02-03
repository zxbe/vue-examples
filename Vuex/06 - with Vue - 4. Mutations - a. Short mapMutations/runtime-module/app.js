/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  mapState,
  mapMutations
} from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { INCREMENT } from './store.js';

export default {
  name: 'App',
  computed: mapState(['year']),
  methods: mapMutations([INCREMENT]),
  template: `
    <div>
      <h1>{{ year }}</h1>
      <button @click="() => increment()">Increase</button>
      <button @click="() => increment(5)">Increase with 5</button>
    </div>
  `
};
