// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/style/index.scss'
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/views/dialog'

import '@/components'

Vue.config.productionTip = false
// console.log('router:', router)
// console.log('store:', store)

router.beforeEach((to, from, next) => {
  // console.log('beforeEach...')
  // console.log('to:', to, 'from:', from)
  // console.log('router:', router)
  next()
})
router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve...')
  next()
})
router.afterEach((to, from) => {
  // console.log('afterEach...')
})

// Vue.use(components)
Vue.use(ElementUI)

// store.dispatch('setMenuGroups', router.groupNames)

// 原型扩展
Vue.prototype.$dispatch = store.dispatch
Vue.prototype.$state = store.getters

// 需要绑定router,当前的this是window, push内部期望的this是router
Vue.prototype.jump = router.push.bind(router)
Vue.prototype.$state.cachedViews = ['homepage']
Vue.prototype.log = console.log
/* eslint-disable no-new */
Vue.component('todo-item', {
  template: '<li>这是个待办事项</li>'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
