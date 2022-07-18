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
MyVueRouter.install = function (Vue) {

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
            return h(routeMap[0])
            // return h('h1', {}, this.blogTitle);
        }
    })

};
export default MyVueRouter
