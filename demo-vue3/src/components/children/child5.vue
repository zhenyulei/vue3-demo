<template>
  <div>
    <div>来自于父组件的props--{{msg}}</div>
    <slot>我是子组件的slot内容</slot>
  </div>
</template>
<script>
export default {
  setup(props,context){
    console.log('props',{...props});
    console.log('context.attrs',{...context.attrs});
  }
}
</script>