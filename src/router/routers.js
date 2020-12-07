import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  // { path: '/login',
  //   meta: { title: '登录', noCache: true },
  //   component: {
  //     templateUrl :'@/views/login.html'
  //   },
  //   hidden: true
  // },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: (resolve) => require(['@/views/home'], resolve),
  //       name: 'Dashboard',
  //       meta: { title: '工作台', icon: 'index', affix: true, noCache: true }
  //     }
  //   ]
  // },
  { path: '/', redirect: 'home' },
  {
    path: '/index', redirect: 'home',
    component: resolve => (require(['@/views/index.vue'], resolve)),
    children: [
      {
        path: '/home',
        component: resolve => (require(['@/views/home.vue'], resolve)),
        props: true,
        meta: {
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/fin-market',
    component: resolve => (require(['@/views/portal/fin-market/list.vue'], resolve))
  },
  {
    path: '/fin-market/detail',
    component: resolve => (require(['@/views/portal/fin-market/detail.vue'], resolve))
  },
  {
    path: '/fin-market/apply',
    component: resolve => (require(['@/views/portal/fin-market/apply.vue'], resolve))
  },
  {
    path: '/fin-org',
    component: resolve => (require(['@/views/portal/fin-org/list.vue'], resolve))
  },
  {
    path: '/fin-org/detail',
    component: resolve => (require(['@/views/portal/fin-org/detail.vue'], resolve))
  },
  {
    path: '/fin-gqrz',
    component: resolve => (require(['@/views/portal/fin-gqrz/list.vue'], resolve))
  },
  {
    path: '/fin-gqrz/detail',
    component: resolve => (require(['@/views/portal/fin-gqrz/detail.vue'], resolve))
  },
  {
    path: '/credit-org',
    component: resolve => (require(['@/views/portal/credit-org/list.vue'], resolve))
  }
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'center',
  //       component: (resolve) => require(['@/views/system/user/center'], resolve),
  //       name: '个人中心',
  //       meta: { title: '个人中心' }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
