<template>
  <div>
    <div>子组件内容：{{value}}</div>
    <button @click="$emit('input','改变值')">点击我</button>
  </div>
</template>
<script>
export default {
    props: ['value']
}
</script>