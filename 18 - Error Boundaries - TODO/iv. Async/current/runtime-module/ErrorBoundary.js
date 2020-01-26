/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'error-boundary',
  data() {
    return {
      error: null
    };
  },
  // Call with async
  async errorCaptured(err) {
    this.error = err;

    // Async -- Return DOES NOT stop the error from propagating.
    return false;
  },
  template: `
    <div>
      <div v-if="error" style="background: pink; color: red; padding-left: 0.5rem; overflow: hidden">
        <p>{{ error.message }}</p>
        <pre style="font-size: 0.5rem">{{ error.stack }}</pre>
      </div>
      <slot v-else />
    </div>
  `
};
