/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { ref } from '../../../../node_modules/vue-next/dist/vue.esm.js';

export default function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  const update = e => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
