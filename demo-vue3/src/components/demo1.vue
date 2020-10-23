<template>
  <div>
    我是组件页面<p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  props:{
    msg:String
  },
  setup(props, ctx) {
    console.log('新增函数入口');
  }
}
</script>