<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <button @click="count++">Click me!</button>
    <br />
    <ClickMe :key="count" />
  </div>
</template>

<script>
/* global httpVueLoader */

const ClickMe = httpVueLoader('./ClickMe.vue');

module.exports = {
  name: 'App',
  components: {
    clickme: ClickMe
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped></style>
