import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import store from './store'
import CreateButton from './plugins/button/index.js'

Vue.directive("resize",{
  inserted(el,binding){
      const callback = binding.value;
      window.addEventListener("resize",()=>callback(window.innerWidth))
  }
})
Vue.component('MyComponentA', {
  template: '<div MyId="123">全局组件(字符串模板)</div>'
})
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(CreateButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
