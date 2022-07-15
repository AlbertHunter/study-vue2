<template>
  <div>
    <layout>
      <template v-slot:header="{user}">头部{{user.email}}</template>

      <template v-slot:default>Hello Content
      </template>


      <template v-slot:footer>尾部</template>
    </layout>
  </div>
</template>
<script>
import Layout from "./Layout";
export default {
  components: {
    Layout
  }
};
</script>