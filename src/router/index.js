import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RegisterAccount from '../views/RegisterAccount.vue'
import changepass from '../views/changepass.vue'
import FormOtp from '../views/FormOtp.vue'
import profile from '../views/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/Register',
    name: 'Register',
    component: RegisterAccount
  }
  ,
  {
    path: '/changepass',
    name: 'Changepassr',
    component: changepass
  }
  ,
  {
    path: '/FormOtp',
    name: 'FormOtp',
    component: FormOtp
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
