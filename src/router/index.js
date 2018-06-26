import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {
    path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/tryplay',
    name: '任务墙',
    meta: {
      title: '任务墙', icon: 'table'},
    children: [
      {
        path: 'tryplay/index',
        name: '下载试玩',
        component: () => import('@/views/task/tryplay/index'),
        meta: {title: '下载试玩', icon: 'list'}
      },

      {
        path: 'bankcard/index',
        name: '银行办卡',
        component: () => import('@/views/task/bankcard/index'),
        meta: {title: '银行办卡', icon: 'list'}
      },
      {
        path: 'register/index',
        name: '注册赚钱',
        component: () => import('@/views/task/register/index'),
        meta: {title: '注册赚钱', icon: 'list'}
      }
    ]
  },
  {
    path: '/metadata',
    name: 'metadata',
    component: Layout,
    meta: {title: '元数据', icon: 'list'},
    redirect: {
      name: 'metaDataBuilding',
    },
    children: [{
      path: 'building',
      name: 'metaDataBuilding',
      component: () => import('@/views/metaData/metaDataBuilding'),
      meta: {title: '建筑元数据', icon: 'list'},
    }, {
      path: 'feature',
      name: 'metaDataFeature',
      component: () => import('@/views/metaData/metaDataFeature'),
      meta: {title: 'Feature元数据', icon: 'list'},
    }]
  },
  {
    path: '/advertising',
    component: Layout,
    redirect: '/advertising/list',
    name: 'advertising',
    meta: {
      title: '广告',
      icon: 'table'
    },
    children: [
      {
        path: 'create',
        name: 'createAdvertising',
        component: () => import('@/views/advertising/create'),
        meta: {title: '添加广告', icon: 'edit'}
      },
      // { path: 'edit/:id(\\d+)', component: () => import('@/views/advertising/edit'), name: 'editAdvertising', meta: { title: '修改广告', noCache: true }, hidden: true },
      {
        path: 'list',
        name: 'advertisingList',
        component: () => import('@/views/advertising/list'),
        meta: {title: '广告列表', icon: 'list'}
      }
    ]
  },

  {
    path: '/betterdiscount',
    component: Layout,
    name: '好折扣',
    meta: {title: '好折扣', icon: 'table'},
    children: [
      {
        path: 'betterdiscount/goodslist',
        name: '好折扣商品列表',
        component: () => import('@/views/betterdiscount/goodslist'),
        meta: { title: '好折扣商品列表', icon: 'table' }
      }
    ]
  },

  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

