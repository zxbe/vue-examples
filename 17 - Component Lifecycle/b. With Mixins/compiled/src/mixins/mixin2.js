// European Union Public License version 1.2
// Copyright © 2020 Rick Beerendonk

import { logEvent } from '../utils.js';

export default {
  name: 'Hello',
  // Lifecycle Hooks
  beforeCreate() {
    // Called synchronously
    // - after the instance has been initialized
    // - before data observation and event/watcher setup
    logEvent('mixin2', 'beforeCreate()', this);
  },
  created() {
    // Called synchronously
    // - after the instance is created
    logEvent('mixin2', 'created()', this);
  },
  beforeMount() {
    // Called
    // - before the mounting begins: the render function is about to be called for the first time.
    logEvent('mixin2', 'beforeMount()', this);
  },
  mounted() {
    // Called
    // - after the instance has been mounted
    //   el is replaced by the newly created vm.$el.
    //
    // Note: No guarantee all child components have also been mounted.
    //       Use vm.$nextTick inside of mounted to wait for all children to be mounted:
    this.$nextTick(() => logEvent('mixin2', 'mounted()', this));
  },
  beforeUpdate() {
    // Called when data changes
    // - before the DOM is patched. Access existing DOM, f.e. remove manually added event listeners.
    //
    // Note: Not called during server-side rendering
    logEvent('mixin2', 'beforeUpdate()', this);
  },
  updated() {
    // Called
    // - after a data change causes the virtual DOM to be re-rendered and patched.
    //
    // Note: No guarantee all child components have also been re-rendered.
    //       Use vm.$nextTick inside of updated to wait for all children to be re-rendered:
    this.$nextTick(function() {
      logEvent('mixin2', 'updated()', this);

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
    logEvent('mixin2', 'activated()', this);
  },
  deactivated() {
    // Called when a kept-alive component is deactivated.
    //
    // Note: Not called during server-side rendering
    logEvent('mixin2', 'deactivated()', this);
  },
  beforeDestroy() {
    // Called
    // - before instance is destroyed. In this hook the instance is still fully functional.
    //
    // Note: Not called during server-side rendering.
    logEvent('mixin2', 'beforeDestroy()', this);
  },
  destroyed() {
    // Called
    // - after instance is destroyed. In this hook the instance is unbound, without children and without event-listeners.
    //
    // Note: Not called during server-side rendering.
    logEvent('mixin2', 'destroyed()', this);
  }
};
