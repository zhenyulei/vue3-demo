<template>
  <div>
    <p>父组件内容</p>
    <input type="text" v-focus/>
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus()
      }
    }
  },
}
</script>