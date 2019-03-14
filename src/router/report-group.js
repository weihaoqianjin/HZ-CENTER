const routerMap = [
  {
    path: '/report',
    meta: { title: '报表统计' },
    component: () => import('@/views/basicView/index'),
    children: [
      {
        name: 'report-list',
        path: 'report-list',
        meta: { title: 'report列表', cached: true },
        component: () => import('@/views/report/report-list')
      }
    ]
  }
]

export default { groupName: '测试2', routes: routerMap }
