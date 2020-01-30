<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>
      <input v-model="area" type="radio" value="Name" />
      Name
    </label>
    <label>
      <input v-model="area" type="radio" value="Value" />
      Value
    </label>

    <div id="result">
      <!-- No keep-alive needed! -->
      <component :is="areaComponent"></component>
    </div>
  </div>
</template>

<script>
/* global httpVueLoader */
const NameComponent = httpVueLoader('../../name/components/NameComponent.vue');
const ValueComponent = httpVueLoader(
  '../../value/components/ValueComponent.vue'
);

module.exports = {
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
  }
};
</script>

<style scoped>
#result {
  padding: 4px;
  background: lightgray;
}
</style>
