import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from '@jiaminghi/data-view'  // 全局引入
import './assets/css/main.css'  // 全局导入css
import echarts from 'echarts' // 全局引入 echarts

Vue.use(datav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
