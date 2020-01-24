/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'MouseOver',
  data() {
    return {
      mousePosition: {
        x: undefined,
        y: undefined
      }
    };
  },
  methods: {
    mouseOver(e) {
      this.mousePosition = { x: e.pageX, y: e.pageY };
    }
  },
  created() {
    document.addEventListener('mouseover', this.mouseOver);
  },
  destroyed() {
    document.removeEventListener('mouseover', this.mouseOver);
  },
  render() {
    return this.$scopedSlots.default({
      mousePosition: this.mousePosition
    });
  }
};
