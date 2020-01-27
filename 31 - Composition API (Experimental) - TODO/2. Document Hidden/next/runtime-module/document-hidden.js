/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  ref,
  onMounted,
  onUnmounted
} from '../../../../node_modules/vue-next/dist/vue.esm.js';

export default function useMousePosition() {
  const isHidden = ref(document.hidden);

  const handleVisibilityChange = e => {
    console.log(e);
    isHidden.value = document.hidden;
  };

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  onUnmounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  return isHidden;
}
