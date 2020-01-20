/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

export default {
  name: 'ContainerComponent',
  data: () => ({
    source: 'Container'
  }),
  template: `<div style="background-color: lightgray; padding: 10px">
    Scoped:
    <div style="background-color: white; padding: 10px">
      <slot :source="source"></slot>
    </div>
  </div>`
};
