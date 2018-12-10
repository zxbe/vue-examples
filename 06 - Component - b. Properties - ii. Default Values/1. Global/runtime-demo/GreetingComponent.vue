<!-- Mozilla Public License Version 2.0 -->
<!-- Copyright © 2018 Rick Beerendonk   -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

// @vue/component
module.exports = {
  name: 'GreetingComponent',
  props: { name: { type: String, default: 'World' } },
};
</script>

<style scoped>
</style>
