import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Salon from '@/views/Salon.vue'
import Menu from '@/views/Menu.vue'
import News from '@/views/News.vue'
import Blog from '@/views/Blog.vue'
import Access from '@/views/Access.vue'
import Recruit from '@/views/Recruit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/salon',
      name: 'salon',
      component: Salon
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/access',
      name: 'access',
      component: Access
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
