import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode:'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:{path:'/home'}
    },
    {
      path:'/home',
      name:'home',
      components:{
        default:()=>import('@/views/Home'),
        name:()=>import('@/views/Name'),
        version:()=>import('@/views/Version')
      }
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/Login')
    },
    {
      path:'/profile',
      name:'profile',
      component:()=>import('@/views/Profile')
    },
    {
      path:'/user',
      name:'user',
      component:()=>import('@/views/User'),
      children:[
        {
          path:'',
          component:()=>import('@/views/UserAdd')
        },
        {
          path:'add',
          name:'userAdd',
          component:()=>import('@/views/UserAdd')
        },
        {
          path:'list',
          name:'userList',
          component:()=>import('@/views/UserList')
        },
        {
          path:'detail/:id',
          name:'userDetail',
          component:()=>import('@/views/Detail'),
          beforeEnter(to,from,next){
            console.log('beforeEnter...')
            next()
          }
        }
      ]
    },
    {
      path:'*',
      component:()=>import('@/views/404.vue')
    }


  ]
})
