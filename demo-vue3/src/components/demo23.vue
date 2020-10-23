<template>
  <div>
      <p>父组件：{{msg}}---{{modelValue}}</p>
      <Child23 v-model:myModel="msg" v-model:modelValue="modelValue"></Child23>
  </div>
</template>
<script>
import Child23 from './children/child23.vue'
import { ref } from "vue";
export default {
  name: 'App',
  components: {
    Child23
  },
  setup(){
    const msg = ref('我是父组件内容');
    const modelValue = ref("parenter content");
    return {
      msg,
      modelValue
    }
  }
}
</script>