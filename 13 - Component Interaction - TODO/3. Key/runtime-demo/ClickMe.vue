<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <a @click.prevent="count++">This link has been clicked {{ count }} times.</a>
</template>

<script>
module.exports = {
  name: 'ClickMe',
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped></style>
