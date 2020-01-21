<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <child @updated="childChanged($event)"></child>
    <h1>Clicked: {{ count }}</h1>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */
/* global httpVueLoader */

const Child = httpVueLoader('./Child.vue');

module.exports = {
  name: 'App',
  components: {
    child: Child
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    childChanged() {
      this.count++;
    }
  }
};
</script>

<style scoped></style>
