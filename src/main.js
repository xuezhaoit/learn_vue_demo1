// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//elementUI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/css/global.css'

// 图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

// 引入自己的组件
import MyUl from '@/components/common/MyUl'
import MyLi from '@/components/common/MyLi'
import NavBar from '@/components/common/NavBar'

// 定义moment全局日期过滤器
import Moment from 'moment'
Vue.filter('converTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

// axios
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 注册全局组件
Vue.component(MyLi.name,MyLi)
Vue.component(MyUl.name,MyUl)
Vue.component(NavBar.name,NavBar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
