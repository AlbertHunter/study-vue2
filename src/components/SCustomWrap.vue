<template>
  <el-input v-bind="$attrs" v-on="$listeners"></el-input>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.el-input >>> .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>