<template>
  <input type="text" :value="value" @input="$emit('input',$event.target.value)" class="el-input__inner" :style="{width: widthCalc}"/>
</template>
<script>
export default {
  name: 'h-input',
  props: {
    width: {
      type: [Number, String],
      default () {
        return 200
      }
    },
    value: [String]
  },
  computed: {
    widthCalc () {
      return `${this.width}px`
    }
  }
}
</script>
