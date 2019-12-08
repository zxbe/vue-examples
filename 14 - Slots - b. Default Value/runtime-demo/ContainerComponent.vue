<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div style="background-color: lightgray; padding: 10px">
    The only item:
    <div style="background-color: white; padding: 10px">
      <slot>Default Slot Value</slot>
    </div>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

// @vue/component
module.exports = {
  name: 'ContainerComponent'
};
</script>

<style scoped></style>
