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
const Bottom = httpVueLoader('./Bottom.vue');
const Middle = httpVueLoader('./Middle.vue');

module.exports = {
  name: 'Top',
  components: {
    bottom: Bottom,
    middle: Middle
  }
};
</script>

<style scoped></style>
