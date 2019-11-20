import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  console.log('main中的钩子')
  next()
})
router.beforeResolve((to,from,next)=>{
  console.log('解析完成resolve')
  next()
})
router.afterEach((to,from)=>{
  console.log('进入当前组件完毕afterEach')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
