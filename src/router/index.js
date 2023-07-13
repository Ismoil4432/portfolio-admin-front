import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/admin-dashboard',
          name: 'home',
          component: () => import('../views/Home/Home.vue')
        },
        {
          path: '/project',
          name: 'project',
          component: () => import('../views/Project/Project.vue')
        },
        {
          path: '/technical_skills',
          name: 'technical_skills',
          component: () => import('../views/Technical_skills/Technical_skills.vue')
        },
        {
          path: '/workplace',
          name: 'workplace',
          component: () => import('../views/Workplaces/Workplaces.vue')
        },
        {
          path: '/education',
          name: 'education',
          component: () => import('../views/Educations/Educations.vue')
        },
        {
          path: '/aboute_me',
          name: 'aboute_me',
          component: () => import('../views/Aboute/Aboute.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('../views/Blogs/Blogs.vue')
        }
      ],
      beforeEnter:((to, from, next) => {

        let token = localStorage.getItem('token')
      
        if (to.name !== "login" && !token) {
          next({ name: 'login' })
        } else {
          next()
        }
      
      })
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration/Registration.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})



export default router
