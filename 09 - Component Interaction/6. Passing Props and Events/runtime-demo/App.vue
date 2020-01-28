<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <ImportantAnchor
    href="https://vuejs.org/"
    rel="noopener"
    target="_blank"
    title="Everything about Vue"
  >
    Vue website
  </ImportantAnchor>
</template>

<script>
/* global httpVueLoader */

const ImportantAnchor = httpVueLoader('./ImportantAnchor.vue');

module.exports = {
  name: 'App',
  components: {
    ImportantAnchor
  }
};
</script>
