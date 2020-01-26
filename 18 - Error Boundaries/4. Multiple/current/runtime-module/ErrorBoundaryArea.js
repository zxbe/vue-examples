/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'error-boundary-area',
  data() {
    return {
      error: null
    };
  },
  errorCaptured(err) {
    // Component must have a name defined to be able to show it.
    this.error = err;

    // Don't stop the error from propagating.
    return true;
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
