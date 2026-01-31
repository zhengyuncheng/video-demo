import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/video-detail'
  },
  {
    path: '/video-list',
    name: 'video-list',
    component: () => import(/* webpackChunkName: "video-list" */ '@/views/video-list/index.vue')
  },
  {
    path: '/video-detail',
    name: 'video-detail',
    component: () => import(/* webpackChunkName: "video-detail" */ '@/views/video-detail/index.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
