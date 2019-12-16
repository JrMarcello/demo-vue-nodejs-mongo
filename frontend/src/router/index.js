import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'employees',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/employee.vue')
    },
    { path: '*', redirect: '/' }
  ]
})

// Vue.http.interceptors.push((request, next) => {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('leands2b/token')}`
//   // request.headers.set('Authorization', `Bearer ${localStorage.getItem('leands2b/token')}`)
//   // request.headers.set('Accept', 'application/json')

//   next()
// })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      return next('/login')
    }

    next()
  } else {
    next()
  }
})

export default router
