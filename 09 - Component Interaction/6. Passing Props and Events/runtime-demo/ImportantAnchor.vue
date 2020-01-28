<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <a v-bind="$attrs" v-on="$listeners"><slot></slot></a>
</template>

<script>
module.exports = {
  name: 'ImportantAnchor',
  // Disable attribute inheritence: https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
  inheritAttrs: false
};
</script>
