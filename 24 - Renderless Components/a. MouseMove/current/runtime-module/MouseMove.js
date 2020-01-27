/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'mouse-move',
  data() {
    return {
      mousePosition: {
        x: undefined,
        y: undefined
      }
    };
  },
  methods: {
    handleMouseMove(e) {
      this.mousePosition = { x: e.pageX, y: e.pageY };
    }
  },
  created() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  destroyed() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  render() {
    return this.$scopedSlots.default(this.mousePosition);
  }
};
