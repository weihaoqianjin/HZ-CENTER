// import Vue from 'vue'
// const dialogsContext = require.context('../', true, /@([a-zA-Z\-0-9]+)\.vue$/)
// const dialogs = dialogsContext.keys().reduce((views, key) => {
//   const fileName = key.match(/@([a-zA-Z\-0-9]+)\.vue$/i)[1]
//   if (!fileName) return views
//   let componentName = fileName
//   let clsName = componentName
//   return Object.assign(views, {[clsName]: dialogsContext(key)})
// }, {})
// Vue.prototype.dialogs = dialogs
