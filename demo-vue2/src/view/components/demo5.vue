<template>
  <div>
    <p>父组件内容：{{msg}}</p>
    <Child5 v-model="msg"></Child5>
  </div>
</template>
<script>
import Child5 from "./children/child5.vue"
export default {
  components:{
    Child5
  },
  data(){
      return {
          msg:'123'
      }
  }
}
</script>