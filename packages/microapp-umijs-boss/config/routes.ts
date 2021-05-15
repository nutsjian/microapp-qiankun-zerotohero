export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
        exact: true
      },
      {
        path: '/page1',
        component: '@/pages/app1/index',
        exact: true
      },
      {
        path: '/page2',
        component: '@/pages/app2/index',
        exact: true
      }
    ]
  },
];