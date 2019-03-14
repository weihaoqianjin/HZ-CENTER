<template>
    <panel>
      <div ref="tDiv" data-auth="heb" style="color:black"></div>
      <el-button type="primary" @click="remove">移除</el-button>
      <!-- <div ref="point"></div> -->
      <el-form>
        <!-- <data-list></data-list> -->
        <!-- <anchor-head :level='1'>一级标题</anchor-head>
        <anchor-head level='2'>二级标题</anchor-head> -->
        <!-- <tfunc /> -->
        <!-- <ul>
          <li is="tfunc" />
          <tfunc />
          <todo-item />
        </ul> -->
        <!-- <tfunc placeholder="Enter your username"/> -->
        <!-- <tfunc @focus="onFocus" @input="onInput"/> -->
        <!-- <tfunc :title.sync="title"/>
        title:{{title}} -->
        <!-- <tfunc>
          <template slot-scope="user">{{user.name}}</template>
        </tfunc> -->
        <div :value="param" v-upper/>
        <!-- <el-button @click="switchBlock" type="primary">切换组件</el-button>
        <keep-alive>
          <component :is="currentView" />
        </keep-alive> -->
        <el-form-item>我是首页</el-form-item>
        <el-form-item label="解耦参数：">
          <el-input style="width: 80px" v-model="param"/>
        </el-form-item>
        <el-form-item label="操作：">
          <el-button @click="jump({path: '/bms/prod-list'})" type="primary">跳转</el-button>
        </el-form-item>
        <el-form-item label="TEXT:">
          <span class="font-color">TEST</span>
          <div class="ml-3">hello</div>
          <div class="m-1">jack</div>
        </el-form-item>
      </el-form>
    </panel>
</template>

<script>
import DataList from '@/components/data-list/index'
import Vue from 'vue'
// import Dialog from '@/components/dialog/index'
export default {
  name: 'homepage',
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter...')
    // vm 是组件实例
    next(vm => {
      vm.init()
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 此时可以访问组件实例this, 只有当路由改变，组件被复用时调用。
    // console.log('beforeRouteUpdate...')
  },
  beforeRouteLeave (to, from, next) {
    // 可访问组件实例this
    // console.log('beforeRouteLeave...')
    next()
  },
  props: ['auth'],
  directives: {
    lower: {
      update (el, binding, vNode) {
        // 指令写法
        el.innerHTML = vNode.data.attrs.value.toLowerCase()
      }
    },
    upper (el, bind, vNode) {
      el.innerHTML = vNode.data.attrs.value.toUpperCase()
    },
    reverse (el, bind, vNode) {
      el.innerHTML = Array.prototype.map.call(vNode.data.attrs.value, a => a.toUpperCase(a) === a ? a.toLowerCase() : a.toUpperCase()).join('')
    }
  },
  data () {
    return {
      text: '',
      param: '',
      view: DataList,
      title: '首页',
      currentView: 'h-input',
      content: 'Jack',
      dialog: {}
    }
  },
  methods: {
    init () {
      // console.log('init...')
      // console.log(this.$route)
    },
    onFocus (event) {
      console.log('onFocus...', event.target.value)
    },
    onInput (value) {
      console.log('input...', value)
    },
    switchBlock () {
      if (this.currentView === 'h-input') {
        this.currentView = 'tfunc'
      } else {
        this.currentView = 'h-input'
      }
    },
    remove () {
      this.dialog.$destroy()
      document.body.removeChild(this.dialog.$el)
    }
  },
  created () {
    // console.log('created...')
    // console.log('router:', this.$router)
    // 创建构造器
  },
  mounted () {
    const dialogsContext = require.context('../', true, /@([a-zA-Z\-0-9]+)\.vue$/)
    const dialogs = dialogsContext.keys()
    console.log(dialogs)
    console.log(dialogsContext(dialogs[0]).default)
    let Profile = Vue.extend(dialogsContext(dialogs[0]).default)
    // 创建 Profile 实例，并挂载到一个元素上。
    this.dialog = new Profile()
    this.dialog.$mount()
    document.body.appendChild(this.dialog.$el)
    console.log(this.$refs.tDiv.dataset)
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
  %color{
    color: blue
  }
  .font-color {
    @extend %color
  }
</style>
