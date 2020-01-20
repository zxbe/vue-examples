<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <Hello :name="name" />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      name: 'A'
    };
  },
  mounted() {
    this.$nextTick(function() {
      // After the entire view has been rendered
      this.name = 'B';
    });
  }
};
</script>

<style></style>
