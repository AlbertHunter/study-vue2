let hash = location.hash
let url = hash.substring(1)
if(url.substring(0,1) == '/'){
    url = hash.substring(2)
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
    Vue.mixin({
        beforeCreate(){
            this.initHash = window.location.hash.slice(1) || '/';
            Vue.util.defineReactive(this,'current',this.initHash)
        }
    })
    Vue.component('myrouter-link',{
        props:{
            to:String
        },
        render(h){
            let to = this.to
            return h('a',{attrs:{href:to}},this.$slots.default)
            // let mode = this._self._root._router.mode;
            // let to = mode === "hash"?"#"+this.to:this.to
            // return h('a',{attrs:{href:to}},this.$slots.default)
        }
    })
    Vue.component('myrouter-view',{
        render(h){
            // let current = this._self._root._router.history.current
            // let routeMap = this._self._root._router.routesMap;
            // return h(routeMap[current])
            let routeMap = createMap(routes)
            console.log(this.current)
            let current = this.current
            return h(routeMap[current])
        }
    })

};
// const myRouter = new MyVueRouter()
// export default myRouter
export default MyVueRouter
