<template>
  <div>
    <p>子组件内容</p>
    <slot name="header">我是header的slot</slot>
    <slot>我是defaults的slot</slot>
    <slot name="footer">我是footer的slot</slot>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$slots, '$slots')//父组件的slots
    console.log(this.$slots.header(), '$slots')//父组件的slots
    console.log(this.$scopedSlots, '$scopedSlots')
  }
}
</script>