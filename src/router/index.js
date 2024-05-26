import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hebei',
      name: 'hebei',
      component: () => import('../views/hebei.vue')
    },
    {
      path: '/shanxi',
      name: 'shanxi',
      component: () => import('../views/shanxi.vue')
    },
    {
      path: '/liaoning',
      name: 'liaoning',
      component: () => import('../views/liaoning.vue')
    },
    {
      path: '/heilongjiang',
      name: 'heilongjiang',
      component: () => import('../views/heilongjiang.vue')
    },
    {
      path: '/jilin',
      name: 'jilin',
      component: () => import('../views/jilin.vue')
    },
    {
      path: '/jiangsu',
      name: 'jiangsu',
      component: () => import('../views/jiangsu.vue')
    },
    {
      path: '/zhejiang',
      name: 'zhejiang',
      component: () => import('../views/zhejiang.vue')
    },
    {
      path: '/anhui',
      name: 'anhui',
      component: () => import('../views/anhui.vue')
    },
    {
      path: '/fujian',
      name: 'fujian',
      component: () => import('../views/fujian.vue')
    },
    {
      path: '/jiangxi',
      name: 'jiangxi',
      component: () => import('../views/jiangxi.vue')
    },
    {
      path: '/shandong',
      name: 'shandong',
      component: () => import('../views/shandong.vue')
    },
    {
      path: '/henan',
      name: 'henan',
      component: () => import('../views/henan.vue')
    },
    {
      path: '/hubei',
      name: 'hubei',
      component: () => import('../views/hubei.vue')
    },
    {
      path: '/hunan',
      name: 'hunan',
      component: () => import('../views/hunan.vue')
    },
    {
      path: '/guangdong',
      name: 'guangdong',
      component: () => import('../views/guangdong.vue')
    },
    {
      path: '/hainan',
      name: 'hainan',
      component: () => import('../views/hainan.vue')
    },
    {
      path: '/sichuan',
      name: 'sichuan',
      component: () => import('../views/sichuan.vue')
    },
    {
      path: '/guizhou',
      name: 'guizhou',
      component: () => import('../views/guizhou.vue')
    },
    {
      path: '/yunnan',
      name: 'yunnan',
      component: () => import('../views/yunnan.vue')
    },
    {
      path: '/shaanxi',
      name: 'shaanxi',
      component: () => import('../views/shaanxi.vue')
    },
    {
      path: '/gansu',
      name: 'gansu',
      component: () => import('../views/gansu.vue')
    },
    {
      path: '/qinghai',
      name: 'qinghai',
      component: () => import('../views/qinghai.vue')
    },
    {
      path: '/taiwan',
      name: 'taiwan',
      component: () => import('../views/taiwan.vue')
    },
    {
      path: '/neimenggu',
      name: 'neimenggu',
      component: () => import('../views/neimenggu.vue')
    },
    {
      path: '/guangxi',
      name: 'guangxi',
      component: () => import('../views/guangxi.vue')
    },
    {
      path: '/xizang',
      name: 'xizang',
      component: () => import('../views/xizang.vue')
    },
    {
      path: '/ningxia',
      name: 'ningxia',
      component: () => import('../views/ningxia.vue')
    },
    {
      path: '/xinjiang',
      name: 'xinjiang',
      component: () => import('../views/xinjiang.vue')
    },
    {
      path: '/beijing',
      name: 'beijing',
      component: () => import('../views/beijing.vue')
    },
    {
      path: '/tianjin',
      name: 'tianjin',
      component: () => import('../views/tianjin.vue')
    },
    {
      path: '/shanghai',
      name: 'shanghai',
      component: () => import('../views/shanghai.vue')
    },
    {
      path: '/chongqing',
      name: 'chongqing',
      component: () => import('../views/chongqing.vue')
    },
    {
      path: '/xianggang',
      name: 'xianggang',
      component: () => import('../views/xianggang.vue')
    },
    {
      path: '/aomen',
      name: 'aomen',
      component: () => import('../views/aomen.vue')
    }
  ]
})

export default router
