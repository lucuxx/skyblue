import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/article',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Main.vue'),
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () =>
          import(
            /* webpackChunkName: "article" */ '@/components/frontEnd/Article.vue'
          )
      },
      {
        path: 'details/:id',
        component: () =>
          import(
            /* webpackChunkName: "article" */ '@/components/frontEnd/Details.vue'
          )
      },
      {
        path: 'project',
        name: 'Project',
        component: () =>
          import(
            /* webpackChunkName: "project" */ '@/components/frontEnd/Project.vue'
          )
      },
      {
        path: 'archive',
        name: 'Archive',
        component: () =>
          import(
            /* webpackChunkName: "archive" */ '@/components/frontEnd/Archive.vue'
          )
      },
      {
        path: 'message',
        name: 'Message',
        component: () =>
          import(
            /* webpackChunkName: "message" */ '@/components/frontEnd/Message.vue'
          )
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '@/components/frontEnd/About.vue'
          )
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/contentManage',
    component: () =>
      import(/* webpackChunkName: "admin" */ '@/views/Admin.vue'),
    children: [
      {
        path: 'contentManage',
        name: 'ContentManage',
        component: () =>
          import(
            /* webpackChunkName: "contentManage" */ '@/components/backEnd/ContentManage.vue'
          )
      },
      {
        path: 'usersManage',
        name: 'UsersManage',
        component: () =>
          import(
            /* webpackChunkName: "usersManage" */ '@/components/backEnd/UsersManage.vue'
          )
      },
      {
        path: 'addarticle',
        name: 'AddArticle',
        component: () =>
          import(
            /* webpackChunkName: "addarticle" */ '@/components/backEnd/AddArticle.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/components/backEnd/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(
        /* webpackChunkName: "register" */ '@/components/backEnd/Register.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
