/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'App',
  computed: {
    females() {
      return this.$store.getters.females;
    }
  },
  template: '<h1>State: {{ females }}</h1>'
};
