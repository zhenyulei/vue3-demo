<template>
<div class="wraper">
  <div class="text">子组件内容，全局样式生效</div>
  <slot>我是slot的替代内容</slot>
  <div class="my-child">子组件内容，父组件样式</div>
</div>
</template>

<style scoped>
:global(.text) {
  color:blueviolet;
}
.my-child{
  color:green;
}
/*设置父组件中slot的样式*/
:slotted(.my-slot){
  color:blue;
}
</style>