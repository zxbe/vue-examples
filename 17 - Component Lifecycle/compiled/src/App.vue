<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <keep-alive>
      <component v-bind:is="currentComponent" :name="name"></component>
    </keep-alive>
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
      currentComponent: Hello,
      name: 'A'
    };
  },
  watch: {
    name() {
      setTimeout(() => {
        // Hide component (but keep alive)
        this.currentComponent = null;
        // Show component (but keep alive)
        setTimeout(() => (this.currentComponent = Hello), 100);
      }, 100);
    }
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
