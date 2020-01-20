<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
/* eslint vue/require-default-prop: "off" */

// @vue/component
module.exports = {
  name: 'GreetingComponent',
  props: { name: [String, Number] }
};
</script>

<style scoped></style>
