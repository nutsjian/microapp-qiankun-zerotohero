export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
        exact: true
      },
      {
        path: '/page1',
        component: '@/pages/page1/index',
        exact: true
      },
      {
        path: '/page2',
        component: '@/pages/page2/index',
      }
    ]
  },
];