let hash = location.hash
let url = hash.substring(1)
if(url.substring(0,1) == '/'){
    url = hash.substring(2)
}
let self_vue
let obj = {
    current:'/'
}
const routes = [
    {
        path: '/demo',
        name: 'demo',
        component: ()=>import('./Demo')
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: ()=>import('./Demo2')
    }
]

class MyVueRouter{
    constructor() {
        this.initHash = window.location.hash.slice(1) || '/';
        self_vue.util.defineReactive(this,'current',this.initHash)
        self_vue.util.defineReactive(obj,'current',this.initHash)
        window.addEventListener('hashchange', this.onHashChange.bind(this))//调用bind是因为让onhashchange的this指向self_router
        window.addEventListener('onload', this.onHashChange.bind(this))
    }
    //hash变化时，改变this.current
    onHashChange() {
        console.log(this.current)
        this.current = window.location.hash.slice(1)//截取#之后的hash字符串
    }
}
const createMap = function(routes){
    return routes.reduce((pre,current)=>{
        pre[current.path] = current.component
        return pre;
    },{})
}
const routesMap = createMap(routes)

console.log(routesMap)
MyVueRouter.install = function (Vue) {
    self_vue = Vue;
    Vue.mixin({
        beforeCreate(){
            if (this.$options.router) {
                console.log(window.location.hash.slice(1) || '/')
                // Vue.prototype.$router = this.$options.router;
            }
        }
    })
    Vue.component('myrouter-link',{
        props:{
            to:String
        },
        render(h){
            let to = this.to
            return h('a',{attrs:{href:to}},this.$slots.default)
        }
    })
    Vue.component('myrouter-view',{
        render(h){
            let routeMap = createMap(routes)
            const current = this.$route.hash.slice(1)
            console.log(this.current)
            console.log(obj.current)
            // let current = this.current
            return h(routeMap[current])
        }
    })

};
// const myRouter = new MyVueRouter()
// export default myRouter
export default MyVueRouter
