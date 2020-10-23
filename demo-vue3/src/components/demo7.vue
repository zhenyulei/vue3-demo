<template>
  <div>
      <p>msg1-{{msg1}}</p>
      <p>msg2-{{msg2}}</p>
  </div>
</template>
<script>
import {reactive,computed,ref} from 'vue' 
export default {
  setup(props, ctx) {
    console.log(this);
    const msg1 = "无法得到得到常量值"
    const msg2 = "可以得到的常量值"
    setTimeout(()=>{
      msg2 = "改变后的数据"
    },2000)
    return {
      msg2
    }
  }
}
</script>