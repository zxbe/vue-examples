<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'GreetingComponent',
  props: {
    name: {
      type: String,
      validator(value) {
        // Check first character is in upper case
        return value.length && value[0] === value[0].toUpperCase();
      }
    }
  }
};
</script>

<style scoped></style>
