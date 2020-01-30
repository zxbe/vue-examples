/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'ValueComponent',
  computed: {
    value: {
      get() {
        return this.$store.state.value.value;
      },
      set(value) {
        this.$store.dispatch('value/change', { value });
      }
    }
  },
  template: `
    <div>
      <label>Value: <input v-model.number="value" type="number" /></label>
      <p>This is {{ value }}!</p>
    </div>
  `
};
