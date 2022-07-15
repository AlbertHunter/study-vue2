<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <s-custom-wrap v-model="form.name"></s-custom-wrap>
      {{ form.name }}
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/* eslint-disable no-console */
// import SCustomWrap from "./SCustomWrap";
import SCustomWrap from "./SCustomWrap.vue"

export default {
  components: {
    SCustomWrap,
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    onSubmit() {
      console.log("click submit");
    },
    onInputFocus() {
      console.log("focus");
    },
  },
};
</script>