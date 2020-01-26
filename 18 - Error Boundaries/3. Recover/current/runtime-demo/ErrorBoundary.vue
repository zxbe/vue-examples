<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="errorboundary">
    <div v-if="error" id="error">
      <p>{{ error.message }}</p>
      <pre id="stack">{{ error.stack }}</pre>
      <button @click="error = null">Reload</button>
    </div>
    <slot v-else />
  </div>
</template>

<script>
module.exports = {
  name: 'error-boundary',
  data() {
    return {
      error: null
    };
  },
  errorCaptured(err) {
    // Component must have a name defined to be able to show it.
    this.error = err;

    // Stop the error from propagating.
    return false;
  }
};
</script>

<style scoped>
#error {
  background: pink;
  color: red;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
}

#stack {
  font-size: 0.5rem;
}
</style>
