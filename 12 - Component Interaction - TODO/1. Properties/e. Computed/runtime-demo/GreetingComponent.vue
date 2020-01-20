<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <h1>Hello {{ computedName }}!</h1>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'GreetingComponent',
  props: ['name'],
  computed: {
    computedName: function() {
      return this.name.trim().toUpperCase();
    }
  }
};
</script>

<style scoped></style>
