/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default function(WrappedComponent) {
  return {
    name: 'withExtras',
    props: ['extraColor', ...WrappedComponent.props],
    render(h) {
      const { extraColor, ...passThroughProps } = this.$props;
      return h(
        'div',
        {
          attrs: {
            style: `color: ${extraColor}`
          }
        },
        [h(WrappedComponent, { props: passThroughProps })]
      );
    }
  };
}
