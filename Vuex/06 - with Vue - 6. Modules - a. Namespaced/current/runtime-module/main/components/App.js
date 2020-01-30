/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import NameComponent from '../../name/components/NameComponent.js';
import ValueComponent from '../../value/components/ValueComponent.js';

export default {
  name: 'App',
  components: {
    NameComponent,
    ValueComponent
  },
  data() {
    return {
      area: 'Name'
    };
  },
  computed: {
    areaComponent() {
      return this.area + 'Component';
    }
  },
  template: `
    <div>
      <label>
        <input v-model="area" type="radio" value="Name" />
        Name
      </label>
      <label>
        <input v-model="area" type="radio" value="Value" />
        Value
      </label>

      <div style="padding: 4px; background: lightgray">
        <!-- No keep-alive needed! -->
        <component v-bind:is="areaComponent"></component>
      </div>
    </div>
  `
};
