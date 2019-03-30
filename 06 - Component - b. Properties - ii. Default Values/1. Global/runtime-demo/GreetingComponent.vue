<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
/* global module */
/* eslint vue/require-prop-types: "off" */

// @vue/component
module.exports = {
  name: 'GreetingComponent',
  props: { name: { type: String, default: 'World' } },
};
</script>

<style scoped>
</style>
