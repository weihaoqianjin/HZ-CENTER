import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'

Vue.use(Vuex)
let modules = [menu]
const store = new Vuex.Store({
  strict: true,
  modules
})

export default store
