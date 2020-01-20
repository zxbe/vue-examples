<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <h1>Top</h1>
    <middle />
  </div>
</template>

<script>
/* global httpVueLoader */
const Middle = httpVueLoader('./Middle.vue');

module.exports = {
  name: 'Top',
  components: {
    middle: Middle
  }
};
</script>

<style scoped></style>
