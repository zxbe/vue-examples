<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <h1>Hello {{ yourName }}!</h1>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

// @vue/component
module.exports = {
  name: 'GreetingComponent',
  props: ['yourName' /* camelCase */]
};
</script>

<style scoped></style>
