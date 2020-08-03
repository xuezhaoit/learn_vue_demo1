import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Findup from '@/components/Findup/Findup'
import Member from '@/components/Member/Member'
import Shopcat from '@/components/Shopcat/Shopcat'
import NewsList from '@/components/NewsList/NewsList'
import NewsDetail from '@/components/NewsList/NewsDetail'
import PhotoList from '@/components/PhotoList/PhotoList'
import PhotoDetail from '@/components/PhotoList/PhotoDetail'
import PorductShow from '@/components/porductShow/porductShow'
import PorductShow2 from '@/components/porductShow/porductShow2'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: {name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/findup',
      name: 'findup',
      component: Findup
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcat',
      name: 'shopcat',
      component: Shopcat
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      // path: '/photoList',
      path:'/photoList/:categoryId',
      name: 'photoList',
      component: PhotoList
    },
    {
      path:'/PhotoDetail',
      name:'PhotoDetail',
      component:PhotoDetail
    },
    {
      path:'/porductShow',
      name:'porductShow',
      component:PorductShow
      
    },
    {
      path:'/porductShow2',
      name:'porductShow2',
      component:PorductShow2
      
    }
  ]
})
