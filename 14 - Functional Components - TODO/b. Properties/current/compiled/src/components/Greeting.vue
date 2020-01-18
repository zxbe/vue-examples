<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
