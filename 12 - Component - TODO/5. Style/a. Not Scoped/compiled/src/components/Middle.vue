<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="middle">
    <h2>Middle</h2>
    <Bottom />
  </div>
</template>

<script>
import Bottom from './Bottom.vue';

export default {
  name: 'Middle',
  components: {
    Bottom
  }
};
</script>

<style>
/* not scoped */
div {
  background-color: #d676ff;
}

#middle {
  text-decoration-line: underline;
}
</style>
