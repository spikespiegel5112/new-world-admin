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
export const constantRouterMap = [{
  path: '/login', component: () => import('@/views/login/index'), hidden: true
}, {
  path: '/404', component: () => import('@/views/404'), hidden: true
}, {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index')
  }]
}, {
  path: '/task',
  component: Layout,
  redirect: '/task/tryplay',
  name: '任务墙',
  meta: {
    title: '任务墙', icon: 'table'
  },
  children: [{
    path: 'demogame',
    name: 'demoGame',
    component: () => import('@/views/task/demoGame'),
    meta: {title: '下载试玩', icon: 'list'}
  }, {
    path: 'bankcard',
    name: 'bankCard',
    component: () => import('@/views/task/bankCard'),
    meta: {title: '银行办卡', icon: 'list'}
  }, {
    path: 'registermakemoney',
    name: 'registerMakeMoney',
    component: () => import('@/views/task/registerMakeMoney'),
    meta: {title: '注册赚钱', icon: 'list'}
  }, {
    path: 'homepageguide',
    name: 'homepageGuide',
    component: () => import('@/views/task/homepageGuide'),
    meta: {title: '首页引导', icon: 'list'}
  }, {
    path: 'registrationinvitation',
    name: 'registrationInvitation',
    component: () => import('@/views/task/registrationInvitation'),
    meta: {title: '注册邀请', icon: 'list'}
  }]
}, {
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
}, {
  path: '/advertising',
  component: Layout,
  redirect: '/advertising/advertistingList',
  name: 'advertising',
  meta: {
    title: '广告',
    icon: 'table'
  },
  children: [{
    path: 'list',
    name: 'advertisingList',
    component: () => import('@/views/advertising/advertistingList'),
    meta: {title: '广告列表', icon: 'list'}
  }]
}, {
  path: '/notice',
  component: Layout,
  redirect: '/notice/list',
  name: 'notice',
  meta: {
    title: '公告',
    icon: 'table'
  },
  children: [{
    hidden: true,
    path: 'edit',
    name: 'noticeEdit',
    component: () => import('@/views/notice/noticeEdit'),
    meta: {title: '编辑公告', icon: 'list'}
  }, {
    path: 'list',
    name: 'noticeList',
    component: () => import('@/views/notice/noticeList'),
    meta: {title: '公告列表', icon: 'list'}
  }]
}, {
  path: '/betterDiscount',
  component: Layout,
  name: '好折扣',
  meta: {title: '好折扣', icon: 'table'},
  redirect: {
    name: 'metaDataBuilding',
  },
  children: [{
    path: 'categorylist',
    name: 'categoryList',
    component: () => import('@/views/betterDiscount/categoryList'),
    meta: {title: '分类列表', icon: 'table'}
  }, {
    path: 'productList',
    name: 'productList',
    component: () => import('@/views/betterDiscount/productList'),
    meta: {title: '商品列表', icon: 'table'}
  }]
}, {
  path: '/bestv',
  component: Layout,
  name: 'BesTV',
  meta: {title: 'BesTV', icon: 'table'},
  redirect: {
    name: 'metaDataBuilding',
  },
  children: [{
    path: 'agent',
    name: 'agent',
    component: () => import('@/views/besTv/agent'),
    meta: {title: '代理商', icon: 'table'}
  }, {
    path: 'cardnumber',
    name: 'cardNumber',
    component: () => import('@/views/besTv/cardNumber'),
    meta: {title: '自助生成卡号', icon: 'table'}
  }]
}, {
  path: '/game',
  component: Layout,
  name: 'game',
  meta: {
    title: '游戏',
    icon: 'table'
  },
  children: [{
    path: 'game',
    name: 'game',
    component: () => import('@/views/game/game'),
    meta: {title: '游戏列表', icon: 'table'}
  },{
    path: 'type',
    name: 'gameType',
    component: () => import('@/views/game/gameType'),
    meta: {title: '游戏类型', icon: 'table'}
  }]




}, {
  path: '*',
  redirect: '/404',
  hidden: true
}];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

