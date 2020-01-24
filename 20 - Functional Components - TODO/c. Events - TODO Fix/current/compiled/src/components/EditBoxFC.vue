<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template functional>
  <input :value="props.value" @keyup="listeners.change" />
</template>

<script>
export default {
  name: 'EditBox',
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
