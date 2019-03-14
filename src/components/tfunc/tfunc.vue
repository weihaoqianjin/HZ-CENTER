<template>
  <!-- <el-form label-width="100px"> -->
    <!-- vue在渲染同样组件的时候不会从头开始渲染，他会复用，所以当在第一个input中输入值的时候，并点击切换，组件开始复用，输入框中仍然会保留之前的输入内容
    如果想要清除，则可以加key用以告诉vue这是两个独立的元素，请不要复用他们，如果key相同则告诉他们是相同元素，切换时input中的内容保留。
    一旦加了key，切换时input内容自动清除。只有一个input的情况下不加key也会自动清除, 如果加了v-model则也是自动清除-->
    <!-- <el-form-item v-if="isSwitch" label="用户名：">
      <h-input />
    </el-form-item>
    <el-form-item label="年龄：" v-else>
      <h-input />
    </el-form-item> -->
    <!-- <el-form-item v-if="isSwitch" label="用户名：">
      <h-input key="1"/>
    </el-form-item>
    <el-form-item label="年龄：" v-else>
      <h-input key="2"/>
    </el-form-item> -->
    <!-- <el-form-item label="组件切换">
      <el-button @click="change" type="primary">change</el-button>
    </el-form-item>
  </el-form> -->
  <!-- <li>hi</li> -->
  <!-- 事件捕获，事件修饰符，按键修饰符, 系统修饰符 -->
  <!-- <div style="width: 200px;height: 200px; background: red" @click.ctrl="log('1')">
    <div style="width: 150px;height: 150px; background: green" @click="log('2')">
      <div style="width: 100px;height: 100px; background: blue" @click.self.prevent="log('3')"></div>
    </div>
  </div> -->
  <!-- 测试$listeners
  <div>
    <span>$listeners:</span>
    <input v-bind="$attrs" v-bind:value="value" v-on="listenerCalc"/>
  </div> -->
  <!-- <div @click="updateTitle">
    {{title}}
  </div> -->
  <!-- <div>
    <slot v-bind="user"></slot>
  </div> -->
  <div>I am tfunc</div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'tfunc',
  props: ['value', 'title'],
  computed: {
    listenerCalc () {
      let self = this
      return Object.assign({}, this.$listeners, {
        input (event) {
          self.$emit('input', event.target.value)
        }
      })
    }
  },
  data () {
    return {
      isSwitch: true,
      userName: '',
      age: '',
      click: 0,
      user: {
        name: 'code',
        age: 19
      }
    }
  },
  methods: {
    change () {
      this.isSwitch = !this.isSwitch
    },
    updateTitle () {
      console.log('updateTitle...')
      this.click++
      this.$emit('update:title', this.title + this.click)
    }
  }
}
</script>
