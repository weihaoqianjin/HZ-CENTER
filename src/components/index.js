
import Vue from 'vue'
import DataList from './data-list/index'
import AnchorHead from './anchor-head/index'
import Tfunc from './tfunc/index'
import HInput from './h-input/index'
import Panel from './panel/index'

const components = [
  DataList,
  AnchorHead,
  Tfunc,
  HInput,
  Panel
]

components.forEach(component => {
  Vue.component(component.name, component)
})
// const install = function (Vue, opts = {}) {
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// } 插件形式写法

// export default {
//   install
// }
