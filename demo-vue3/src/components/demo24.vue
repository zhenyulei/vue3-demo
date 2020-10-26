<template>
  <div>
      <div class="text">父组件内容，子组件的全局样式生效</div>
      <Child24><span class="my-slot">我是父组件的slot，子组件设置父组件中slot的样式</span></Child24>
  </div>
</template>
<script>
import Child24 from './children/child24.vue';
export default {
  components: {
    Child24,
  }
}
</script>

<style scoped>
/*覆盖子组件的样式*/
:deep(.my-child){
  color:red;
}
</style>