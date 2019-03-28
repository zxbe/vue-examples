<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      default: 'World',
      required: false
    }
  }
};
</script>

<style scoped>
h1 {
  color: #d676ff;
}
</style>
