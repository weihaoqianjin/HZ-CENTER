import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import basicView from '@/views/basicView/index'

import bmsGroup from './bms-group'
import reportGroup from './report-group'

// 菜单组路由
const MenuGroup = [bmsGroup, reportGroup]

Vue.use(Router)
// 基础路由表
let routerMap = [
  {
    path: '/',
    redirect: '/homepage',
    // component: () => import('@/views/basicView/index'),
    component: basicView,
    children: [
      {
        name: 'homepage',
        path: 'homepage',
        meta: { title: '首页', cached: true },
        // props: true, 参数解耦布尔模式
        // props: {auth: 'admin'}, 参数解耦对象模式
        props: (route) => {
          return {
            auth: route.query.auth
          }
        },
        component: () => import('@/views/home/index')
      }
    ]
  }
  // {
  //   path: '/user/:id',
  //   component: () => import('@/views/home/index')
  // }   动态路径参数完成动态路由匹配，使用:。适用场景: 某种模式匹配到的所有路由映射到同一个组件上。id会成为params
  // {
  //   path: '/test',
  //   meta: { title: '测试' },
  //   component: () => import('@/views/home/index')
  // },
]

function createRouter (group) {
  group.routes[0].groupName = group.groupName
  routerMap = [...routerMap, ...group.routes]
}

// 合并菜单组路由并记录相关信息
MenuGroup.forEach(item => {
  createRouter(item)
})

// 创建路由实例
let router = new Router({
  routes: routerMap
})

let groups = MenuGroup.map((item, index) => {
  return {
    selected: !index,
    groupName: item.groupName
  }
})

store.dispatch('setMenuGroups', groups)

export default router
