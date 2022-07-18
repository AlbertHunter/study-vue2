<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>Demo</el-header>
      <el-container>
        <el-aside width="20%">
          <el-col>
            <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">测试功能</span>
                </template>
                <el-menu-item-group>
                  <span slot="title">分组一</span>
                  <el-menu-item v-for="(item,index) of menus" :index="index.toString()" :key="index" :route="item.path">
                    {{ item.name }}
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <div class="content">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>


<script>
import { routes } from "@/router";
export default {
  data() {
    return {
      menus: routes
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
