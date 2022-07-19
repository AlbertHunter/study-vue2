let hash = location.hash
let url = hash.substring(1)
if(url.substring(0,1) == '/'){
    url = hash.substring(2)
}
console.log(url)
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
            if(this.$options && this.$options.router){
                this._root = this; //把当前实例挂载到_root上
                this._router = this.$options.router;
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
            console.log(routeMap)
            // console.log(routeMap.get('demo'))
            // return h(routeMap[0])
            return h('h1', {}, '测试');
        }
    })

};
export default MyVueRouter
