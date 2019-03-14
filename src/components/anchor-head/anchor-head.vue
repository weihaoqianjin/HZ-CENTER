<script>
export default {
  name: 'anchor-head',
  props: {
    level: [Number, String]
    // level: {
    //   type: Number,
    //   default: 0
    // }
  },
  render (createElement) {
    return createElement(
      `h${this.level}`,
      this.$slots.default
    )
  }
}
</script>
