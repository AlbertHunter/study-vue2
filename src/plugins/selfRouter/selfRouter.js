let self_vue;

class self_router {
    constructor(options) { //这里的options是index.js中new router时传入的配置对象
        this.options = options;
        this.initHash = window.location.hash.slice(1) || '/';
        //创建一个私有属性，表示最新的hash值，URL中hash值变化时改变这个值，这个值变化时，通知视图更新(通过将这个私有属性变为响应式即可)。
        self_vue.util.defineReactive(this,'current',this.initHash)
        //监听hash发生变化
        window.addEventListener('hashchange', this.onHashChange.bind(this))//调用bind是因为让onhashchange的this指向self_router
        window.addEventListener('onload', this.onHashChange.bind(this))
    }
    //hash变化时，改变this.current
    onHashChange() {
        this.current = window.location.hash.slice(1)//截取#之后的hash字符串
    }
}
self_router.install = function (Vue) {
    self_vue = Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        }
    })

    Vue.component('self-router-link', {//注册router-link组件
        props: {
            to: {//router-link组件调用时的父组件传参 “to”
                type: String,
                required: true
            }
        },
        render(h) {//渲染函数写了一个建议的router-link，
            //相当于写了一个template组件或是用jsx写了个组件
            return h('a', { attrs: { href: "#" + this.to } }, this.$slots.default) //参数分别为：tagName，attr，是vue默认的子节点内容
        }
    })
    Vue.component('self-router-view', {//注册router-view组件,这一步只是先保证不报错
        render(h) {
            const routes = this.$router.options.routes;
            console.log(routes)
            let currentRoute = routes.find((item) => {
                return item.path == this.$router.current
            })
            let renderComponent = currentRoute.component || null
            return h(renderComponent)
        }
    })
}
module.exports = self_router

