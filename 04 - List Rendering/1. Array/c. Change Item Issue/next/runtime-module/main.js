/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

let itemId = 4;

Vue.createApp().mount(
  {
    data: {
      items: ['one', 'two', 'three']
    },
    methods: {
      overwrite1() {
        // WRONG in Vue Next (Vue 3), was right,
        // because it uses Proxies (this here is a Proxy):
        //console.log(this);

        this.set(this.items, 0, itemId++);
      },
      overwrite2() {
        this.items.splice(0, 1, itemId++);
      },
      overwrite3() {
        const [, ...rest] = this.items;
        this.items = [itemId++, ...rest];
      },
      overwrite4() {
        // RIGHT Vue Next (Vue 3), was wrong,
        // because it uses Proxies (this here is a Proxy):
        //console.log(this);

        this.items[0] = itemId++;
      }
    }
  },
  '#app'
);
