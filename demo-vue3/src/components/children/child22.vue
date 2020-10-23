<template>
  <div>
    <div class="my-content">我是子组件内容:{{modelValue}}</div>
    <button @click="$emit('update:modelValue','new value')">点击我</button>
  </div>
</template>
<script>
import {ref,onMounted,nextTick} from 'vue' 
export default {
  props:{ //这里声明props
    modelValue:String,
  }
}
</script>