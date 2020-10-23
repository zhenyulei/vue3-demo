<template>
  <div>
      <p>父组件：{{msg}}</p>
      <Child22 v-model="msg"></Child22>
  </div>
</template>
<script>
import Child22 from './children/child22.vue'
import { ref } from "vue";
export default {
  name: 'App',
  components: {
    Child22
  },
  setup(){
    const msg = ref('我是父组件内容');
    return {
      msg
    }
  }
}
</script>