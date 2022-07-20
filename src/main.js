import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import store from './store'
import CreateButton from './plugins/button/index.js'
import myRouter from './plugins/myRouter/router'
import selfRouter from './plugins/selfRouter/index'

Vue.directive("resize",{
  inserted(el,binding){
      const callback = binding.value;
      window.addEventListener("resize",()=>callback(window.innerWidth))
  }
})
Vue.component('MyComponentA', {
  template: '<div MyId="123">全局组件(字符串模板)</div>'
})


/*util.defineReactive */
let test={
    testa:new Date().getTime()+'计时开始'
}
//设置定时器
setTimeout(function(){
    test.testa = new Date().getTime()+'计时结束'
},5000)
function utilDemo(){
    console.log(6);
}
utilDemo.install=function(vue){
    //监听testa
    Vue.util.defineReactive(test,'testa');
    //全局混入vue实例
    vue.mixin({
        data(){
            return {
                c:'欢迎访问超逸の博客'
            }
        },
        methods:{
        },
        beforeCreate:function(){
            this.test=test;
        },
        //全局生命周期注入
        created:function(){
            //console.log(this)
        }

    });
}








Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(CreateButton)
Vue.use(utilDemo)
Vue.use(myRouter)
new myRouter()
new Vue({
    router,
    store,
    selfRouter,
    myRouter,
    render: h => h(App)
}).$mount('#app')
