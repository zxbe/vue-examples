/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'divider-component',
  data() {
    return {
      numerator: 3,
      denominator: 2
    };
  },
  computed: {
    result() {
      if (this.denominator === 0) {
        throw new Error('Division by zero.');
      }
      return this.numerator / this.denominator;
    }
  },
  template: `
  <div>
    <p style="color: gray">Divide by zero to throw an exception</p>
    <input
      v-model.number="numerator"
      type="number"
    />
    <span> divided by </span>
    <input
      v-model.number="denominator"
      :autofocus="'autofocus'"
      type="number"
    />
    <span> is equal to </span>
    {{ result }}.
  </div>
  `
};
