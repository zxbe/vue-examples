<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <h1>Hello {{ name }}! ({{ count }} time)</h1>
</template>

<script>
import { logEvent } from '../utils.js';

export default {
  name: 'Hello',
  props: {
    name: {
      type: String,
      default: 'World',
      required: false
    }
  },
  data() {
    return {
      count: 0
    };
  },
  // Lifecycle Hooks
  beforeCreate() {
    // Called synchronously
    // - after the instance has been initialized
    // - before data observation and event/watcher setup
    logEvent('beforeCreate()', this);
  },
  created() {
    // Called synchronously
    // - after the instance is created
    logEvent('created()', this);
  },
  beforeMount() {
    // Called
    // - before the mounting begins: the render function is about to be called for the first time.
    logEvent('beforeMount()', this);
  },
  mounted() {
    // Called
    // - after the instance has been mounted
    //   el is replaced by the newly created vm.$el.
    //
    // Note: No guarantee all child components have also been mounted.
    //       Use vm.$nextTick inside of mounted to wait for all children to be mounted:
    this.$nextTick(() => logEvent('mounted()', this));
  },
  beforeUpdate() {
    // Called when data changes
    // - before the DOM is patched. Access existing DOM, f.e. remove manually added event listeners.
    //
    // Note: Not called during server-side rendering
    logEvent('beforeUpdate()', this);
  },
  updated() {
    // Called
    // - after a data change causes the virtual DOM to be re-rendered and patched.
    //
    // Note: No guarantee all child components have also been re-rendered.
    //       Use vm.$nextTick inside of updated to wait for all children to be re-rendered:
    this.$nextTick(function() {
      logEvent('updated()', this);

      // Update data
      if (this.count === 0) {
        this.count = 1;
      }
    });
  },
  activated() {
    // Called when a kept-alive component is activated.
    //
    // Note: Not called during server-side rendering
    logEvent('activated()', this);
  },
  deactivated() {
    // Called when a kept-alive component is deactivated.
    //
    // Note: Not called during server-side rendering
    logEvent('deactivated()', this);
  },
  beforeDestroy() {
    // Called
    // - before instance is destroyed. In this hook the instance is still fully functional.
    //
    // Note: Not called during server-side rendering.
    logEvent('beforeDestroy()', this);
  },
  destroyed() {
    // Called
    // - after instance is destroyed. In this hook the instance is unbound, without children and without event-listeners.
    //
    // Note: Not called during server-side rendering.
    logEvent('destroyed()', this);
  }
};
</script>

<style></style>
