<template>
  <button class="create-btn primary">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default  {
  name: 'CreateButton',
  demo: '测试'
}
</script>
<style scoped>
 .create-btn {
   display: inline-block;
   line-height: 1;
   cursor: pointer;
   background: #fff;
   border: 1px solid #dcdfe6;
   color: #606266;
   text-align: center;
   box-sizing: border-box;
   outline: none;
   margin: 0;
   transition: 0.1s;
   font-weight: 500;
   padding: 12px 20px;
   font-size:14px;
   border-radius: 4px;
 }
 .primary {
   color:#fff;
   background-color: #409eff;
   border-color: #409eff;
 }
</style>
