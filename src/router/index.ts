import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '@/views/TabsPage.vue'
import Dress from '@/views/dress/index.vue'
import DressForm from '@/views/dress/components/DressForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/all',
    meta: { depth: 0 }
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { depth: 1 },
    children: [
      {
        path: '',
        redirect: '/tabs/all',
        meta: { depth: 2 }
      },
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/tabs/all.vue'),
        meta: { depth: 2 }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/tabs/recommend.vue'),
        meta: { depth: 2 }
      },
      {
        path: 'fashion',
        name: 'fashion',
        component: () => import('@/views/tabs/fashion.vue'),
        meta: { depth: 2 }
      },
      {
        path: 'match',
        name: 'match',
        component: () => import('@/views/tabs/match.vue'),
        meta: { depth: 2 }
      }
    ]
  },
  {
    path: '/user-info',
    name: 'user-info',
    meta: { depth: 1 },
    component: () => import('@/views/user/info.vue')
  },
  {
    path: '/dress',
    name: 'dress',
    meta: { depth: 1 },
    component: Dress
  },
  {
    path: '/dress-info',
    name: 'dress-info',
    component: () => import('@/views/dress/dress-info.vue')
  },
  {
    path: '/dress-form',
    name: 'dress-form',
    meta: { depth: 1 },
    component: DressForm
  },
  {
    path: '/product-info',
    name: 'product-info',
    meta: { depth: 1 },
    component: () => import('@/views/product/info.vue')
  },
  {
    path: '/demands',
    name: 'demands',
    meta: { depth: 1 },
    component: () => import('@/views/demand/index.vue')
  },
  {
    path: '/demand-info',
    name: 'demand-info',
    meta: { depth: 1 },
    component: () => import('@/views/demand/info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
