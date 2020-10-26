<template>
  <div>
      <div>父组件内容</div>
      <Child32 currAge="12"><em>姓名：</em><span>小花</span></Child32>
  </div>
</template>
<script>
import Child32 from './children/child32.js';
import { ref } from "vue";
export default {
  components: {
    Child32
  }
}
</script>