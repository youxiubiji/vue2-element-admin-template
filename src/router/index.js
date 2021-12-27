import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index'),
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true,
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
                name: 'Home',
                meta: { title: '首页', icon: 'home',affix: true},
            },
        ],
    },
    {
        path: '/documentation',
        component: Layout,
        redirect: '/documentation/list',
        name: 'Documentation',
        meta: {
          title: '文档',
          icon: 'documentation'
        },
        children: [
            {
                path: 'list',
                component: () => import('@/views/documentation/index'),
                name: 'Documentation_Index',
                meta: { title: '文档列表',  },
            },
            {
                path: 'add',
                component: () => import('@/views/documentation/add'),
                name: 'Documentation_add',
                meta: { title: '添加文档' },
            },
        ],
    },
]

export const asyncRoutes = []

const createRouter = () =>
    new VueRouter({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    })

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
