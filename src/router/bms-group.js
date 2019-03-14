const routerMap = [
  {
    path: '/bms',
    meta: { title: '商品管理' },
    component: () => import('@/views/basicView/index'),
    children: [
      {
        name: 'prod-list',
        path: 'prod-list',
        meta: { title: 'bms列表', cached: true },
        component: () => import('@/views/bms/prod-list'),
        // 如果A,B页面共用C组件，并且需要缓存页面，即缓存C时，使用componentName,否则cachedViews将添加A,B路由配置时的name
        componentName: 'prod-list'
      }
    ]
  }
]

export default { groupName: '测试1', routes: routerMap }
