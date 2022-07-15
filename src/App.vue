<template>
  <div id="app">
    <h2>Demo</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component-data">组件传值</router-link> |
      <router-link to="/customize">自定义组件</router-link> |
      <router-link to="/vmodel">双向绑定</router-link> |
      <router-link to="/obj-define-property">ObjectDefineProperty</router-link> |
      <router-link to="/slot">插槽</router-link> |
      <router-link to="/listen-attr">组件通信</router-link> |
      <router-link to="/renderless">组件复用</router-link> |
      <router-link to="/vuex">Vuex</router-link>
    </div>
    <router-view/>
    <CreateButton>测试按钮</CreateButton>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
