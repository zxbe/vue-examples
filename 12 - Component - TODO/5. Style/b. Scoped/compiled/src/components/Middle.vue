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

<style scoped>
#middle {
  background-color: #d676ff;
  color: #444;
}
</style>
