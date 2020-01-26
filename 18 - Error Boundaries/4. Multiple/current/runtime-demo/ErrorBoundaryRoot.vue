<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="errorboundaryroot">
    <slot />
  </div>
</template>

<script>
module.exports = {
  name: 'error-boundary-root',
  errorCaptured(err, vm, info) {
    // Side effect:
    // Opportunity to send data to our servers...
    console.error('Log error to server: \n', err, vm, info);

    // Stop the error from propagating.
    return false;
  }
};
</script>
