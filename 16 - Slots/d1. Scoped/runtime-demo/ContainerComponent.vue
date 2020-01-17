<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div style="background-color: lightgray; padding: 10px">
    Normal:
    <div style="background-color: white; padding: 10px">
      <slot name="first"></slot>
    </div>
    Scoped:
    <div style="background-color: white; padding: 10px">
      <slot name="second" :source="source"></slot>
    </div>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

// @vue/component
module.exports = {
  name: 'ContainerComponent',
  data: () => ({
    source: 'Container'
  })
};
</script>

<style scoped></style>
